# Advanced Error Handling

## What is it?
Advanced Error Handling covers how JavaScript reports, propagates, and recovers from runtime errors.

## Why it matters
Robust error handling is critical in senior frontend code to keep applications stable and to surface meaningful diagnostics.

## Topics covered
- custom error classes
- error inheritance
- `try/catch/finally`
- promise rejection handling
- unhandled promise rejection

## Interview questions and answers

### What is a custom error and why use it?
A custom error is a subclass of `Error` that represents a specific failure reason. Use it to provide clearer messages, error codes, and structured handling in catch blocks.

### How does error propagation work?
When an exception is thrown, control jumps to the nearest `catch` in the call stack. If no catch exists, the error propagates to the global handler.

### What is `finally` for?
`finally` executes after `try` and `catch` regardless of success or failure, making it ideal for cleanup.

### What is an unhandled promise rejection?
An unhandled promise rejection occurs when a promise rejects but no `.catch()` or `try/catch` handles it. Modern runtimes may log warnings or terminate the process.

## Quick revision
- extend `Error` for custom errors.
- use `throw` to signal failures.
- handle async errors with `.catch()` or `try/catch` around `await`.
- always add fallback handling for rejected promises.
