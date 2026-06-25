# Functional Programming

## What is it?

Functional Programming covers writing code with pure functions, immutability, composition, and declarative operations.

## Why it matters

Functional principles lead to easier reasoning, fewer side effects, and more predictable frontend state management.

## Topics covered

- pure functions
- immutability
- composition and pipe
- `map`, `reduce`, `filter`
- currying and higher-order functions

## Interview questions and answers

### What is a pure function?

A pure function always returns the same output for the same inputs and has no side effects. It does not modify external state.

### What is immutability in JavaScript?

Immutability means not changing existing values; instead, create new copies. Use spread, `Object.assign`, and array methods to preserve original data.

### What is function composition?

Composition combines functions so the output of one becomes the input of another. It is useful for building reusable data pipelines.

### When should you use `reduce`?

Use `reduce` when you need to transform an array into a single value, such as summing numbers, grouping items, or building lookup objects.

## Quick revision

- favor pure functions and avoid shared state.
- use `map`, `filter`, `reduce` for declarative array transformations.
- compose small functions instead of writing long procedures.
