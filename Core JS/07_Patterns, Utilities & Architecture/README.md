# Patterns, Utilities & Architecture

## What is it?

This folder contains reusable JavaScript utilities and common architecture patterns used across frontend applications.

## Why it matters

Writing small, well-designed utilities and using stable patterns reduces complexity and makes code easier to maintain.

## Topics covered

- debounce and throttle utilities
- deep cloning and memoization
- event emitter/pub-sub
- architectural patterns for reusable code

## Interview questions and answers

### What is debounce and when do you use it?

Debounce delays a function call until after a period of inactivity. It is ideal for search input, resize events, and any user-driven event where you want to avoid repeated work.

### What is throttle and when do you use it?

Throttle limits the execution of a function to a fixed interval. Use it for scroll listeners, animation updates, or telemetry events that may fire frequently.

### Why is deep cloning tricky in JavaScript?

Deep cloning is tricky because objects can contain nested arrays, dates, maps, sets, and circular references. A naive clone may lose prototypes, functions, or special object types.

### What is memoization?

Memoization caches the result of a function call so that if it is called again with the same arguments, the cached result is returned instead of recomputing.

## Quick revision

- debounce waits for quiet periods, throttle limits frequency.
- deep clone must handle nested objects and circular references.
- pub-sub decouples event emitters from listeners.
- memoize improves performance for deterministic functions.
