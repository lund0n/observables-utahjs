/* eslint-disable import/no-extraneous-dependencies */
const jsonServer = require('json-server');
const livereload = require('livereload');
const path = require('path');
const rollup = require('rollup-endpoint');
const serveStatic = require('serve-static');

const buble = require('rollup-plugin-buble');
const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');

const app = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
app.use('/rxjs', serveStatic(path.resolve('node_modules', '@reactivex', 'rxjs', 'dist', 'global')));
app.use('*.js', (req, res) => {
  const middleware = rollup.serve({
    entry: path.join(__dirname, 'src', req.baseUrl),
    external: [
      '@reactivex/rxjs',
    ],
    generateOptions: {
      globals: {
        '@reactivex/rxjs': 'window.Rx',
      },
    },
    plugins: [
      resolve({
        jsnext: true,
        main: true,
        browser: true,
      }),
      commonjs({
        ignoreGlobal: true,
      }),
      buble(),
    ],
  });
  middleware(req, res);
});
app.use(serveStatic(path.resolve('src')));
app.use(router);
app.use(middlewares);

app.listen(8000, () => {
  const lrServer = livereload.createServer();
  console.log('Server started on port 8000.');
  lrServer.watch(path.resolve('src'));
});
