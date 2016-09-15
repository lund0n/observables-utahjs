import { Observable } from '@reactivex/rxjs';

const inputElement = document.querySelector('.input');
const outputElement = document.querySelector('.output');
const input$ = Observable.fromEvent(inputElement, 'input')
  .map(ev => ev.target.value);

input$.subscribe(value => {
  const now = Date.now();
  outputElement.textContent = `${now}: ${value}`;
});
