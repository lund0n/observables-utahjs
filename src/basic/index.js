import { Observable } from 'rxjs-es/Observable';
import 'rxjs-es/add/observable/of';
import 'rxjs-es/add/observable/from';

Observable.of(1, 2, 3)
  .subscribe(x => console.log(x));

Observable.from([1, 2, 3])
  .subscribe(x => console.log(x));

const observable = new Observable(observer => {
  const timer = setTimeout(() => {
    observer.next('hello');
    observer.complete();
  }, 1000);

  return () => clearTimeout(timer);
});

observable.subscribe({
  next(val) {
    console.log(val);
  },
  error(err) {
    console.log(`Finished with error: ${err}`);
  },
  complete() {
    console.log('Finished');
  },
});
