const groceries = [
  'milk',
  'eggs',
  'bread',
];

groceries
  .map((grocery) => {
    const div = document.createElement('div');
    div.textContent = grocery;
    return div;
  })
  .forEach((element) => {
    document.body.appendChild(element);
  });
