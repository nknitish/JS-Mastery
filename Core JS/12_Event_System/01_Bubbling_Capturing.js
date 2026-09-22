/*
=========================================
BUBBLING AND CAPTURING
=========================================

This file demonstrates how DOM events move through the capture,
 target, and bubble phases.
*/

const container = document.createElement("div");
container.style.border = "2px solid black";
container.style.padding = "12px";
container.style.margin = "20px";
container.textContent = "container";

const button = document.createElement("button");
button.textContent = "Click me";
container.appendChild(button);

document.body.appendChild(container);

// CAPTURE: parent to child
container.addEventListener(
  "click",
  () => {
    console.log("container capture phase");
  },
  true,
);

// TARGET: button itself
button.addEventListener("click", (event) => {
  console.log("button target phase");
});

// BUBBLE: child to parent
container.addEventListener("click", () => {
  console.log("container bubble phase");
});

// stop propagation example
button.addEventListener("click", (event) => {
  console.log("button before stopPropagation");
  event.stopPropagation();
  console.log("Propagation stopped on button");
});

/*
Expected behavior when clicking the button:
- container capture phase
- button target phase
- button before stopPropagation
- Propagation stopped on button

The bubbled container listener will NOT fire if stopPropagation is called.
*/
