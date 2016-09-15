import { Observable } from '@reactivex/rxjs';

const clockElement = document.createElement('h1');
document.body.appendChild(clockElement);

const time$ = Observable.interval(1000);

time$.subscribe(time => {
  clockElement.textContent = time;
});
