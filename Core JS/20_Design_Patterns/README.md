# JavaScript Design Patterns

## What is it?
Design patterns are reusable solutions for common architecture problems in JavaScript applications.

## Why it matters
Senior frontend engineers use design patterns to build maintainable, testable, and scalable code.

## Topics covered
- observer/pub-sub
- module pattern
- singleton
- factory functions
- decorator and strategy patterns

## Interview questions and answers

### What is the module pattern?
The module pattern encapsulates private state and exposes a public API. It uses closures to hide implementation details.

### What is the observer/pub-sub pattern?
Observer/pub-sub decouples producers from consumers by broadcasting events to listeners. It is useful in UI frameworks and event-driven code.

### When is singleton appropriate?
Singleton is appropriate when you need a single shared resource or configuration object. Use it sparingly to avoid hidden global state.

### What is a factory function?
A factory function returns new object instances without requiring `new`. It is more flexible and easier to test than constructor functions.

## Quick revision
- use patterns to structure code, not as a goal in itself.
- prefer simple functions over over-engineered patterns.
- use pub-sub for decoupled event handling.
- avoid singletons if they introduce hidden dependencies.
