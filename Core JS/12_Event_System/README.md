# Event System

This folder covers how DOM events move through the page, how listeners work, and how to build custom communication patterns in the browser.

## Why events matter

Browser events are how user actions and browser behavior are communicated to JavaScript.

Examples:

- click
- mousemove
- keydown
- submit
- scroll
- focus
- load

Without event handling, the page would feel static and disconnected from user input.

## Event flow: capturing, target, bubbling

When an event happens, it goes through 3 phases:

1. Capturing phase
   - starts at the root of the DOM tree and moves down toward the target element
   - listeners added with the third argument set to true run here
2. Target phase
   - the event reaches the actual element that triggered it
3. Bubbling phase
   - the event travels back upward from the target to the root element

### Event order

```js
parent.addEventListener("click", () => {
  console.log("parent bubble");
});

child.addEventListener("click", () => {
  console.log("child");
});

parent.addEventListener(
  "click",
  () => {
    console.log("parent capture");
  },
  true,
);
```

If the user clicks the child, the order is usually:

- parent capture
- child
- parent bubble

### Capturing example

```js
document.body.addEventListener(
  "click",
  () => console.log("body capture"),
  true,
);

button.addEventListener("click", () => console.log("button click"));
```

The capture listener runs before the target element's listener.

### Bubbling example

```js
button.addEventListener("click", () => console.log("button"));
div.addEventListener("click", () => console.log("div"));
body.addEventListener("click", () => console.log("body"));
```

When the button is clicked, the event bubbles upward:

- button
- div
- body

## stopPropagation vs stopImmediatePropagation

### stopPropagation

```js
button.addEventListener("click", (event) => {
  event.stopPropagation();
});
```

This stops the event from moving further up the DOM tree.

### stopImmediatePropagation

```js
button.addEventListener("click", (event) => {
  event.stopImmediatePropagation();
});
```

This prevents:

- propagation to ancestors
- all remaining listeners on the same element from running

### Example

```js
button.addEventListener("click", (event) => {
  console.log("first");
  event.stopPropagation();
});

button.addEventListener("click", () => {
  console.log("second");
});
```

The first listener runs, and the second on the same element is blocked.

## preventDefault

`preventDefault()` prevents the browser's default action for an event.

Example:

```js
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("form submission prevented");
});
```

This is useful for:

- form submissions
- anchor navigation
- checkbox toggles in custom logic

## Event delegation

Event delegation is a pattern where you attach one listener to a parent and handle events from its children.

This is useful when:

- the page has many dynamic items
- new elements are inserted later
- you want to avoid attaching multiple listeners

### Example

```js
<ul id="todoList">
  <li>Task 1</li>
  <li>Task 2</li>
  <li>Task 3</li>
</ul>;

const list = document.getElementById("todoList");

list.addEventListener("click", (event) => {
  const item = event.target.closest("li");

  if (!item) return;

  console.log("Clicked item:", item.textContent);
});
```

Why this is useful:

- only one listener is attached to the parent
- works for dynamically created children
- reduces memory overhead
- keeps event logic centralized

### Delegation vs direct binding

Direct binding:

```js
items.forEach((item) => {
  item.addEventListener("click", handleClick);
});
```

Delegation:

```js
parent.addEventListener("click", handleClick);
```

Delegation is generally better when the child list changes often.

## Passive listeners

Passive listeners are used for events like scroll and touchmove when you do not need to call `preventDefault()`.

```js
window.addEventListener(
  "scroll",
  () => {
    console.log("scrolling");
  },
  { passive: true },
);
```

Benefits:

- smoother scroll performance
- browser can optimize handling
- avoids unnecessary blocking of scrolling

## Custom events

Custom events let your code communicate without using built-in browser events.

### Creating a custom event

```js
const event = new CustomEvent("user:update", {
  detail: { id: 1, name: "Asha" },
  bubbles: true,
  cancelable: true,
});
```

### Dispatching the event

```js
element.dispatchEvent(event);
```

### Listening for custom events

```js
element.addEventListener("user:update", (event) => {
  console.log(event.detail);
});
```

### Why use custom events?

- decouple components
- communicate between parent and child without direct references
- notify other parts of the app about an update

Example:

```js
function emitUpdate(target, data) {
  const event = new CustomEvent("user:update", {
    detail: data,
    bubbles: true,
    cancelable: true,
  });

  target.dispatchEvent(event);
}

const card = document.querySelector(".card");

card.addEventListener("user:update", (event) => {
  console.log("Updated user:", event.detail);
});

emitUpdate(card, { id: 2, name: "Riya" });
```

## Interview questions and answers

### What are the three phases of DOM propagation?

The three phases are capturing, target, and bubbling.

### Why is event delegation useful?

It reduces listeners and handles dynamic content more efficiently.

### What is the difference between stopPropagation and stopImmediatePropagation?

`stopPropagation` stops the event from moving upward, while `stopImmediatePropagation` also blocks other listeners on the same element.

### What does preventDefault do?

It stops the browser from performing the default action of the event.

### How do you create a custom event?

Use `new CustomEvent(name, { detail, bubbles, cancelable })` and then `dispatchEvent()`.

### Why use passive listeners?

They improve scroll performance when the listener does not call `preventDefault()`.

## Quick summary

- bubbling goes from target to root
- capturing goes from root to target
- target phase runs on the actual clicked element
- `stopPropagation` stops upward travel
- `stopImmediatePropagation` stops the same element's remaining listeners too
- `preventDefault` prevents built-in browser behavior
- event delegation is best for dynamic and repeated elements
- custom events let your app communicate internally

The DOM event system is one of the most important concepts in frontend development because it powers user interactions, interactivity, and component communication.
