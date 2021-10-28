// a function to speed up the creation of HTML elements through JS. Only the elementType is mandatory. 
// All parameters are strings, for example:
// elementType = 'div'
// classes = 'button red extra-wide'
// id = 'red-button'

const createElement = (elementType, classes, id) => {
  const element = document.createElement(elementType);
  
  if (classes) {
    element.className = classes;
  } 
  if (id) {
    element.id = id;
  }

  return element;
};

export {createElement}