# Advanced Prototype

## What is it?
Advanced Prototype covers prototype chain mechanics, inheritance, and object relationship primitives.

## Why it matters
Prototypes are the basis of JavaScript object behavior and inheritance semantics.

## Topics covered
- `instanceof` and prototype lookup
- `__proto__` vs `[[Prototype]]`
- `Object.create()`
- `hasOwnProperty()` and `isPrototypeOf()`
- `Object.assign()`

## Interview questions and answers

### How does `instanceof` determine if an object is an instance of a constructor?
`instanceof` checks whether the constructor's `prototype` exists in the object's prototype chain via repeated `[[Prototype]]` lookups.

### What is the relationship between `__proto__` and `Object.getPrototypeOf()`?
`__proto__` is an accessor exposing an object's prototype; `Object.getPrototypeOf(obj)` is the standard method to obtain the same prototype value.

### When should you use `Object.create()`?
Use `Object.create(proto)` to create a new object with a specific prototype without calling a constructor; useful for inheritance without side effects.

### How does `hasOwnProperty()` differ from property access?
`hasOwnProperty` returns true only for properties directly on the object, not inherited ones, while property access walks the prototype chain.

### Explain prototype inheritance and delegation.
Prototype inheritance means objects delegate property lookup to their prototype chain; methods live on prototypes and are shared across instances.

## Quick notes
- Property lookup traverses the prototype chain until it finds a property or reaches `null`.
- `Object.create(proto)` builds a new object whose prototype is `proto`.
- `Object.assign()` copies own enumerable properties from source objects.
- `hasOwnProperty()` protects against inherited properties.
