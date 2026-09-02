/*
=========================================
BUBBLING AND CAPTURING
=========================================

This file explains propagation phases and propagation control.

=========================================
*/

const container = document.createElement("div");
container.style.border = "2px solid black";
container.style.padding = "8px";
container.textContent = "container";

document.body.appendChild(container);

const button = document.createElement("button");
button.textContent = "click me";
container.appendChild(button);

container.addEventListener("click", () => {
  console.log("container bubble");
});

// Event Capturing -> Parents to Child
container.addEventListener(
  "click",
  () => {
    console.log("container capture");
  },
  true,
);

button.addEventListener("click", (event) => {
  console.log("button handler");
  event.stopPropagation();
});

/*
Expected output when clicking button:
container capture
button handler

Explanation:
- capture listener runs before the button handler because it is registered with `capture: true`.
- `stopPropagation` prevents the bubbling container listener from firing.
*/
