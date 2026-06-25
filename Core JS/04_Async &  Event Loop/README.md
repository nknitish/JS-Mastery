# Async JavaScript & Event Loop

## What is it?
This folder explains promises, async/await, timers, and the event loop.

## Why it matters
Asynchronous patterns are everywhere in frontend code. Understanding them is critical for correct control flow and error handling.

## Topics covered
- Promises and chaining
- async/await
- timers: `setTimeout`, `setInterval`
- promise error propagation
- event loop basics

## Interview questions and answers

### How do promises work internally?
Promises represent the eventual result of an asynchronous operation. Internally, a promise has a state (`pending`, `fulfilled`, or `rejected`) and a list of reactions. When the operation completes, the promise transitions state and triggers its registered callbacks in the microtask queue.

### What is the difference between callback queue and microtask queue?
The callback queue holds macrotasks such as `setTimeout`, `setInterval`, and I/O events. The microtask queue holds promise callbacks and mutation observer tasks. After the current stack finishes, the engine flushes microtasks before processing the next macrotask.

### How do you gracefully handle promise errors?
Use `.catch()` or `try/catch` around `await`. Always return or rethrow errors after logging if you want calling code to handle them. Example:
```js
fetch(url)
  .then((res) => res.json())
  .catch((err) => {
    console.error('fetch failed', err);
    throw err;
  });
```

### How does `async/await` simplify promise code?
`async/await` makes asynchronous code look synchronous, which improves readability and control flow. It allows `try/catch` to handle promise rejections and avoids deeply nested `.then()` chains.

### When should you use `setInterval` vs `requestAnimationFrame`?
Use `setInterval` for repeating logic that is not tied to rendering, such as polling. Use `requestAnimationFrame` for visual updates and animations because it aligns with the browser's repaint cycle and improves smoothness.

## Quick revision
- async functions always return promises.
- `.catch()` handles promise rejections.
- `await` pauses execution until resolution.
- timer callbacks are scheduled in the macrotask queue.
