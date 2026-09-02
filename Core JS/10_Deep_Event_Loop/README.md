# Deep Event Loop

## What is it?

The event loop is the runtime mechanism that schedules JavaScript execution and asynchronous callbacks in browsers and Node.js.

## Why it matters

Understanding the event loop is essential for predicting async behavior, avoiding race conditions, and optimizing performance.

## Topics covered

- browser event loop and rendering pipeline
- macrotasks vs microtasks
- requestAnimationFrame / requestIdleCallback
- MutationObserver
- Node.js event loop phases

## Interview questions and answers

### What is the difference between macrotasks and microtasks?

Microtasks (e.g., promise callbacks, `queueMicrotask`) run after the current call stack finishes but before the next macrotask. Macrotasks (e.g., `setTimeout`, I/O) are scheduled between ticks and may trigger a repaint.

### How does `Promise.then` compare with `setTimeout` scheduling?

`Promise.then` schedules a microtask, so its callback runs sooner — immediately after the current sync code — whereas `setTimeout(..., 0)` schedules a macrotask that runs later.

### When should you use `requestAnimationFrame`?

Use `requestAnimationFrame` for DOM writes tied to visual updates; it schedules callbacks just before the next repaint for smoother animations.

### What is `MutationObserver` used for?

`MutationObserver` observes DOM changes asynchronously and is useful for reacting to dynamic content without polling or heavy mutation checks.

### How does the browser render when you change the DOM?

DOM changes trigger style recalculation, layout (reflow) if geometry changed, paint (repaint), and compositing. Minimize forced synchronous layout reads to avoid thrashing.

## Quick notes

- microtasks run after the current task but before the next repaint.
- `requestAnimationFrame` is synchronized with the next browser repaint.
- `requestIdleCallback` runs when the browser is idle.
