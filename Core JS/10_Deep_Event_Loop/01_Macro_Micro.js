/*
=========================================
MACROTASKS VS MICROTASKS
=========================================

This file explains the event loop ordering for timers, promises, and next tick tasks.

=========================================
*/

console.log('script start');

setTimeout(() => {
  console.log('timeout');
}, 0);

Promise.resolve().then(() => {
  console.log('promise');
});

console.log('script end');

/*
Expected output:
script start
script end
promise
timeout

Explanation:
- `console.log` lines run in the current stack.
- Promise callbacks are microtasks and run before the next task.
- `setTimeout` callback is a macrotask and waits until the microtask queue is empty.
*/