export const qs = document.querySelector.bind(document);

export const appendTo = columnElement => value => {
  const element = document.createElement('div');
  element.textContent = value;
  columnElement.appendChild(element);
};
