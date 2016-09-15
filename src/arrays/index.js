import { Observable } from '@reactivex/rxjs';
import { appendTo, qs } from '../utils';

const addToArrayColumn = appendTo(qs('.comparison--arrays'));
const addToObservableColumn = appendTo(qs('.comparison--observables'));

const array = [8, 6, 7, 5, 3, 0, 9];
const array$ = Observable.from(array);

array.forEach(item => {
  addToArrayColumn(item);
});

array$.subscribe(item => {
  addToObservableColumn(item);
});
