# Advanced Functions

## What is it?
Advanced Functions covers powerful JavaScript function patterns like currying, partial application, composition, memoization, IIFE, pure functions, recursion, and tail recursion.

## Why it matters
These patterns improve modularity, readability, reuse, and performance in large codebases.

## Topics covered
- Currying vs partial application
- Function composition and pipe
- Memoization
- Pure functions
- IIFE
- Recursion and tail recursion

## Interview questions and answers

### What is currying and how is it different from partial application?
Currying transforms a function of multiple arguments into a chain of unary functions. Partial application pre-fills some arguments but returns a function that accepts the remaining ones.

### Implement `curry()` from scratch.
Answer (brief): return a function that collects arguments in a closure, and when collected args length >= original arity, call the original function with them; otherwise return a function that accepts more args.

### Describe function composition and provide an example.
Composition combines functions so the output of one becomes the input of another: `compose(f,g)(x) === f(g(x))` — useful for building pipelines.

### Why are pure functions preferred in FP-style code?
Pure functions are deterministic and side-effect-free, making them easier to test, memoize, and reason about in concurrent contexts.

### When is tail recursion useful?
Tail recursion enables recursive algorithms without growing the call stack when the runtime optimizes tail calls; useful for some recursive transforms on large inputs.

## Quick notes
- Currying transforms a function into a chain of unary functions.
- Partial application pre-fills some function arguments.
- Memoization caches results of deterministic functions.
- IIFE executes immediately and isolates scope.
- Tail recursion allows recursion without additional stack growth when optimized.
