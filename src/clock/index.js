import { Observable } from '@reactivex/rxjs';

const clockElement = document.createElement('h1');
document.body.appendChild(clockElement);

Observable.interval(1000)
  // .map(() => Date.now()) // map interval to a timestamp.
  .subscribe(time => {
    clockElement.textContent = time;
  });
