import { Observable } from 'rxjs-es';
import { appendTo, qs } from '../utils';

const appender = appendTo(qs('body'));

const hello$ = Observable.create(observer => {
  observer.next('Hello');
  observer.next('world');
  observer.complete();
});

hello$.subscribe(value => {
  appender(value);
});
