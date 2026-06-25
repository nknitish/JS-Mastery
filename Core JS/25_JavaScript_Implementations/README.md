# JavaScript Implementations

## What is it?

This folder contains scratch implementations of core JavaScript utilities and polyfills that are frequently asked in interviews.

## Why it matters

Implementing these utilities deepens your understanding of JS internals and shows you know how to build behavior from the language primitives.

## Topics covered

- Promise helpers
- debounce / throttle
- bind / call / apply
- new and instanceof
- deepClone
- flattenArray / flattenObject
- curry / memoize / pipe / compose
- eventEmitter
- LRU cache

## Interview questions and answers

### Why implement native utilities?

Building native utilities demonstrates understanding of how the language works and helps you reason about edge cases like binding, invocation context, and performance.

### How do you implement `bind`?

`bind` returns a new function with a fixed `this` value and optionally preset arguments. It must also preserve the original function's prototype chain when used with `new`.

### What is an LRU cache?

An LRU cache evicts the least recently used item when the cache reaches capacity, optimizing memory for repeated access patterns.

## Quick revision

- `call/apply` invoke a function with explicit `this`.
- `bind` returns a wrapper with bound context.
- `new` creates a fresh object with a prototype link.
- `pipe` and `compose` build function pipelines.
- deep clone requires handling arrays, objects, and circular references.
