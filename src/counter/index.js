import { Observable } from '@reactivex/rxjs';
import { qs } from '../utils';

const btnIncrement = qs('.counter--increment');
const btnDecrement = qs('.counter--decrement');
const valueElement = qs('.counter--value');

// Creates a keydown stream, mapping events to keyCode values.
const keydown$ = Observable.fromEvent(document.body, 'keydown')
  .map(ev => ev.keyCode); // map to keyCode values.

// Uncomment to use the arrow keys to increment/decrement counters.
// up: increase by 5
// down: decrease by 5
// left: decrease by 1
// right: increatse by 1
// const up$ = keydown$.filter(keyCode => keyCode === 38).mapTo(5);
// const down$ = keydown$.filter(keyCode => keyCode === 40).mapTo(-5);
// const left$ = keydown$.filter(keyCode => keyCode === 37).mapTo(-1);
// const right$ = keydown$.filter(keyCode => keyCode === 39).mapTo(1);
const increment$ = Observable.fromEvent(btnIncrement, 'click')
  .map(() => 1);
const decrement$ = Observable.fromEvent(btnDecrement, 'click')
  .map(() => -1);

const counter$ = Observable.merge(
  // up$,
  // down$,
  // left$,
  // right$,
  increment$,
  decrement$
)
  .startWith(0) // set a starting count value.
  .scan((total, delta) => total + delta);

counter$.subscribe(value => {
  valueElement.textContent = value;
});
