# Advanced Async

## What is it?
Advanced Async explains Promise internals, queues, cancellation, retry patterns, concurrency control, and advanced async utilities.

## Why it matters
Modern frontend systems are asynchronous by default, and mastering async patterns is essential for reliability and performance.

## Topics covered
- Promise internals and microtasks
- Implementation of `Promise.all`, `race`, `any`, `allSettled`
- AbortController and cancellation
- Retry and timeout wrappers
- Concurrency control and race conditions

## Interview questions and answers

### How does the promise microtask queue differ from the callback (macrotask) queue?
Microtasks (promise callbacks) run immediately after the current call stack completes but before any macrotask (like `setTimeout`) is processed.

### What is the difference between `Promise.all` and `Promise.allSettled`?
`Promise.all` resolves when all promises fulfill and rejects on the first rejection. `Promise.allSettled` waits for all promises and returns their settled status without throwing.

### How would you implement cancellation using `AbortController`?
Use an `AbortController` signal to pass to fetch or to cooperative functions; listen to `signal.aborted` and reject/cleanup when set.

### How do you avoid race conditions in parallel async tasks?
Control concurrency (limit parallelism), sequence dependent steps, and use locks/atomic checks or cancellation to ensure the correct order.

### What is a timeout wrapper and why is it useful?
A timeout wrapper rejects a promise if it doesn't settle within a given time, preventing hung requests and enabling fail-fast behavior.

## Quick notes
- Promises execute `.then` handlers as microtasks after the current call stack.
- `Promise.all` rejects on first rejection; `allSettled` collects statuses.
- Cancellation is cooperative: tasks must observe an abort signal and stop.
