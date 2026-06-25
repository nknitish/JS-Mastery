# Event System

## What is it?
The Event System covers how DOM events propagate, how to stop propagation, and how to use custom events.

## Why it matters
Senior frontend developers need to manage event flow clearly and avoid duplicate handlers or unexpected behavior.

## Topics covered
- capturing, target, bubbling phases
- `stopPropagation`, `stopImmediatePropagation`
- `preventDefault`
- passive event listeners
- custom events

## Interview questions and answers

### What are the three phases of DOM event propagation?
There are three phases: capturing (top-down), target, and bubbling (bottom-up). Listeners can be registered for capture or bubble.

### How does `stopImmediatePropagation` differ from `stopPropagation`?
`stopPropagation` prevents the event from reaching further listeners on ancestor nodes, while `stopImmediatePropagation` also prevents later listeners on the same element from running.

### Why use `{ passive: true }` on scroll listeners?
Using `{ passive: true }` tells the browser the listener will not call `preventDefault()`, allowing smoother scrolling by avoiding delayed event handling.

### How do you dispatch a custom event?
Use `new CustomEvent('name', { detail, bubbles, cancelable })` and `element.dispatchEvent(event)`.

### What is event delegation and why is it useful?
Event delegation attaches a single listener to a parent element and handles events for child elements by inspecting `event.target`. It reduces memory and simplifies dynamic content handling.

## Quick notes
- capture phase goes from window -> target.
- bubble phase goes from target -> window.
- `preventDefault` stops browser default actions like form submission.
- custom events are created with `new CustomEvent`.
