import { Observable } from '@reactivex/rxjs';

const draggable = document.querySelector('.draggable');
const mouseDown$ = Observable.fromEvent(draggable, 'mousedown');
const mouseUp$ = Observable.fromEvent(draggable, 'mouseup');
const mouseMove$ = Observable.fromEvent(document, 'mousemove');

const mouseDrag$ = mouseDown$
  .switchMap(() =>
    mouseMove$
      .map(ev => {
        ev.preventDefault();
        return {
          left: ev.clientX,
          top: ev.clientY,
        };
      })
      .takeUntil(mouseUp$));

mouseDrag$.subscribe(pos => {
  draggable.style.top = `${pos.top}px`;
  draggable.style.left = `${pos.left}px`;
});
