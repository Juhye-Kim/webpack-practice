function component() {
  const element = document.createElement("div");

  // need lodash library to execute this line
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());
