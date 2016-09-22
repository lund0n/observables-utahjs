export const clearNodes = resultList => () => {
  const children = resultList.querySelectorAll('.person');
  for (let i = 0; i < children.length; i += 1) {
    children[i].remove();
  }
};

export const addPerson = person => {
  const personNode = document.createElement('div');
  const nameNode = document.createElement('div');
  const imageNode = document.createElement('img');
  personNode.appendChild(nameNode);
  personNode.appendChild(imageNode);
  personNode.classList.add('person');
  nameNode.classList.add('person__name');
  nameNode.textContent = person.name;
  imageNode.classList.add('person__images');
  imageNode.src = person.avatar;
  return personNode;
};
