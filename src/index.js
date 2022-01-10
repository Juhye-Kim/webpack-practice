import _ from "lodash";
import add from "./add";

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["add", "4 and 5 is "], " ");
  element.innerHTML += add(4, 5);

  return element;
}

document.body.appendChild(component());
