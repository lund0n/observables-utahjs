/* eslint-disable import/no-extraneous-dependencies */
import buble from 'rollup-plugin-buble';
import commonjs from 'rollup-plugin-commonjs';
import eslint from 'rollup-plugin-eslint';
import filesize from 'rollup-plugin-filesize';
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'src/basic/index.js',
  dest: 'dist/index.js',
  format: 'iife',
  sourceMap: 'inline',
  plugins: [
    filesize(),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs({
      ignoreGlobal: true,
    }),
    eslint(),
    buble(),
    (process.env.NODE_ENV === 'production' && uglify()),
  ],
};
