# Promise Patterns and Request Control

This folder is focused on practical Promise usage in real-world code.

## Topic focus

- Promise basics
- async/await patterns
- network request control
- cancellation patterns
- retry logic
- concurrency control
- interview-style Promise challenges

## Why this matters

Promises are the foundation of modern asynchronous JavaScript. Real apps need more than `resolve` and `.then()`; they need patterns for:

- canceling requests
- retrying failed requests
- controlling parallelism
- managing time gaps between requests
- handling bulk async operations safely

## Main concepts covered

### 1) Better request wrapper

A request helper can:

- accept a URL and options
- support abort/cancel
- retry on failure
- delay between retries
- return a clean Promise-based API

### 2) Controlled concurrency

When you need to call 20 requests, but only allow 3 at a time, you need a scheduler or queue.

This is often done with:

- a worker pool pattern
- a queue of pending tasks
- a concurrency limit

### 3) Rate limiting / delay between requests

Some systems do not allow burst requests. Adding a delay between them avoids overload and respects API policies.

## Typical interview challenge

> Make 20 fetch requests, but only 3 should run at a time, and each request must wait 1 second between executions.

This tests:

- Promise chaining
- async scheduling
- concurrency control
- understanding of async timing

## Files in this folder

- `01_betterRequest.js`: request wrapper with cancellation and retry support
- `02_limitedConcurrency.js`: queue-based concurrent request limiter
- `03_retry.js`: retry pattern with a bounded number of attempts and delay between retries
- `04_executeOneByOneWithDelay.js`: runs promise tasks sequentially with a 1 second delay between them

---

This folder is meant to practice the kind of Promise-based control logic that appears in real application code and interviews.
