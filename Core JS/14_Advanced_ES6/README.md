# Advanced ES6+

## What is it?
Advanced ES6+ covers modern syntax and runtime features that improve expressiveness and safety.

## Why it matters
Senior developers must understand newer language features to write future-proof code.

## Topics covered
- optional chaining
- nullish coalescing
- dynamic `import()`
- top-level await
- private fields
- static blocks
- `WeakRef` and `FinalizationRegistry`

## Interview questions and answers

### How does optional chaining work?
Optional chaining (`?.`) short-circuits if the left-hand expression is `null` or `undefined` and returns `undefined` instead of throwing.

### What is the difference between `||` and `??`?
`||` returns the right-hand side for any falsy left value; `??` only returns it for `null` or `undefined`.

### When would you use dynamic import?
Use dynamic import to lazily load modules only when needed, reducing initial bundle size and improving startup performance.

### What do private fields protect against?
Private fields declared with `#` are only accessible within the class body and cannot be read or written from outside code.

### Why are `WeakRef` and `FinalizationRegistry` dangerous?
They can lead to nondeterministic cleanup behavior and may complicate reasoning about object lifetime and memory safety.

## Quick notes
- `?.` short-circuits on nullish values.
- `??` only treats `null` and `undefined` as empty.
- dynamic import returns a Promise.
- private fields are declared with `#` inside classes.
