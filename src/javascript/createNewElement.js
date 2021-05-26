export function createNewElement(element, text, className, id) {
  let newElement = document.createElement(element);
  if (text) {
    newElement.innerText = text;
  }
  if (className) {
    newElement.className = className;
  }
  if (id) {
    newElement.setAttribute('id', id);
  }
  return newElement;
}
