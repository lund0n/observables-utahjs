import { Observable } from '@reactivex/rxjs';
import { clearNodes, addPerson } from './utils';

const searchField = document.querySelector('.search');
const resultList = document.querySelector('.results');
const clearResults = clearNodes(resultList);
const search$ = Observable.fromEvent(searchField, 'keyup')
  .map(e => e.target.value)
  // .startWith('') // add an initial value to the stream.
  // .distinctUntilChanged() // don't send consecutive, same values down the stream.
  // .debounceTime(300) // debounce requests so that every keyup doesn't trigger a request.
  .switchMap(query =>
    Observable.fromPromise(
      fetch(`http://localhost:8000/people?name_like=${query}`)
        .then(response => response.json())
    )
  );

search$.subscribe(
  results => {
    clearResults();
    results
      .map(addPerson)
      .forEach(resultNode => {
        resultList.appendChild(resultNode);
      });
  },
  err => {
    console.log('Error', err);
  }
);
