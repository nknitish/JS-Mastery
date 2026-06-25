# Output Questions

## What is it?
This folder collects output-based JavaScript puzzles focused on hoisting, closures, `this`, promises, event loop, and prototypes.

## Why it matters
Output questions test your ability to predict JavaScript execution order and understand subtle language behavior, which is critical for senior interview roles.

## Topics covered
- hoisting and TDZ
- closures and scope
- `this` binding
- promise and async order
- event loop and microtasks
- prototype chain behavior

## Interview questions and answers

### Why are output questions common in interviews?
They reveal whether you understand JavaScript execution order, scope, closures, and asynchronous behavior instead of just syntax.

### How should you approach them?
Read the code carefully, identify scope and context, and simulate execution step by step. Pay attention to operator precedence, hoisting, and queue order.

### How do microtasks and macrotasks differ?
Microtasks execute after the current stack and before the next macrotask. Promises and `queueMicrotask` use microtasks, while `setTimeout` uses macrotasks.

## Quick revision
- hoisting moves declarations, not initializations.
- closures capture live references to lexical variables.
- `this` depends on how a function is called.
- promise callbacks run before timer callbacks.
- `for...of` uses the iterator protocol.
