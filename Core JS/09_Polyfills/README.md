# Polyfills

## What is it?
Polyfills are pieces of code that add missing browser API support for older or non-standard environments.

## Why it matters
Polyfills let developers use modern JavaScript features without dropping support for legacy platforms. They also help build progressive enhancement strategies.

## Implementation notes
- `Array.prototype.flat` polyfill adds array flattening support.
- `Function.prototype.call/apply/bind` polyfills replicate invocation behavior.
- `Promise` polyfill adds a basic ES6-compatible promise implementation.

## Interview questions and answers

### What is a polyfill?
A polyfill is a compatibility layer that implements newer APIs or language features in older environments.

### How is a polyfill different from a ponyfill?
A polyfill patches globals or prototypes. A ponyfill returns a standalone implementation without modifying built-in objects.

### When should you use a polyfill?
Use a polyfill when you need a feature in browsers that do not support it natively and when you cannot replace the feature with a simpler alternative.

### What is feature detection?
Feature detection checks if a browser supports an API before using it. It is safer than browser sniffing and allows progressive enhancement.

## Quick revision
- Polyfills preserve old-browser support for modern syntax and APIs.
- Prefer ponyfills when you want to avoid global prototype mutation.
- Always verify feature support before applying a polyfill.
