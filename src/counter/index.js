import { Observable } from '@reactivex/rxjs';
import { qs } from '../utils';

const btnIncrement = qs('.counter--increment');
const btnDecrement = qs('.counter--decrement');
const valueElement = qs('.counter--value');

// 37 left, 38 up, 39 right, 40 down
const increment$ = Observable.fromEvent(btnIncrement, 'click')
  .map(() => 1);
const decrement$ = Observable.fromEvent(btnDecrement, 'click')
  .map(() => -1);

const counter$ = Observable.merge(
  increment$,
  decrement$
)
  .startWith(0)
  .scan((total, delta) => total + delta);

counter$.subscribe(value => {
  valueElement.textContent = value;
});
