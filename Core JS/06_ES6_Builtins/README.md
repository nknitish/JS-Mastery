# ES6+ & Built-in Data Structures

## What is it?

This folder covers ES6+ syntax and modern built-in collections such as Map, Set, WeakMap, and WeakSet.

## Why it matters

ES6 features are now standard in production code. They help you write cleaner, safer, and more expressive JavaScript.

## Topics covered

- template literals
- destructuring
- spread and rest operators
- enhanced object literals
- Map, Set, WeakMap, WeakSet
- Symbols and well-known symbols
- iterators and generators

## Interview questions and answers

### What are the benefits of `Map` over plain objects?

`Map` preserves insertion order, allows keys of any type, and has a `.size` property. It also avoids collisions with object prototype properties.

### How does destructuring work with nested objects?

Destructuring extracts nested properties directly into variables, making code more readable and avoiding repeated property access.

Example answer:
"You can write `const { address: { city } } = user;` to extract `city` from a nested `address` object."

### Why use `WeakMap` or `WeakSet`?

`WeakMap` and `WeakSet` hold weak references to objects, allowing them to be garbage collected if there are no other references. They are ideal for caches and metadata storage where keys should not prevent collection.

### What is a Symbol and why use it?

A Symbol is a unique primitive value used as an object key. It prevents accidental property name collisions and enables well-known symbol behavior, such as custom iteration.

### How are iterators used in ES6?

Iterators provide a standard protocol for consuming values. Objects that implement `[Symbol.iterator]()` can be used with `for...of`, the spread operator, and destructuring.

## Quick notes

- template literals support interpolation and multiline strings.
- rest collects arguments, spread expands elements.
- `Map` preserves insertion order and supports any key type.
- `WeakMap` keys are weakly referenced and not enumerable.
