# Object Internals

## What is it?
Object Internals explains how property descriptors, mutability APIs, reflection, and proxies work in JavaScript.

## Why it matters
Understanding object internals helps you design safer APIs, protect invariants, and intercept object behavior.

## Topics covered
- Property descriptors
- `Object.defineProperty`
- `Object.freeze`, `Object.seal`, `Object.preventExtensions`
- `Object.keys`, `Object.values`, `Object.entries`
- `Reflect` and `Proxy`

## Interview questions and answers

### What is the difference between `Object.freeze()` and `Object.seal()`?
`Object.freeze(obj)` makes existing properties non-writable and non-configurable (effectively immutable). `Object.seal(obj)` prevents adding or removing properties but allows changing writable property values.

### How do you create a non-enumerable property with `Object.defineProperty()`?
Use `Object.defineProperty(obj, 'key', { value: v, enumerable: false, writable: true, configurable: true })` to set the `enumerable` descriptor.

### When should you use `Object.preventExtensions()`?
Use `Object.preventExtensions(obj)` when you want to disallow adding new properties, often for API contracts or immutability guarantees.

### How can you validate property access with a `Proxy` object?
Implement `get` and `set` traps on a `Proxy` to intercept reads/writes and validate or transform values before delegating to the target.

### Why use `Reflect` instead of direct object methods?
`Reflect` provides functional equivalents (e.g., `Reflect.get`, `Reflect.set`) that have predictable return values and work well with proxies and meta-programming.

## Quick notes
- Descriptors control whether properties are writable, enumerable, and configurable.
- Freeze makes an object immutable at the property level.
- Seal prevents adding/removing properties but allows updating existing writable values.
- Proxy traps let you define custom behavior for property access and assignment.
