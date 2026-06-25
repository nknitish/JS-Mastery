# Functions, Scope & Objects

## What is it?
This folder explains how JavaScript functions work, how scope and closures affect data access, and how objects and arrays are created and transformed.

JavaScript functions are first-class values. They can be passed as arguments, returned from other functions, and capture lexical scope to build powerful patterns.

## Why it matters
Functions and objects are the foundation of JavaScript architecture. Understanding them deeply prevents bugs, helps reason about asynchronous callbacks, and enables reusable abstractions.

## Topics covered
- function declarations vs function expressions
- arrow functions and `this`
- default, rest, and spread parameters
- scope: global, function, block, lexical
- closures and private state
- object creation patterns: literals, factory, constructor, class
- destructuring and JSON serialization
- common array iteration methods

## Core concepts explained

### Function declarations vs function expressions
- declarations are hoisted with their definitions, so they can be called before they appear in code.
- expressions are values assigned to variables and are only available after evaluation.

Example:
```js
function declared() {
  return 'declared';
}
const expressed = function () {
  return 'expressed';
};
```

### Arrow functions and `this`
- arrow functions do not create their own `this`.
- they inherit `this` from the surrounding lexical scope.
- use regular functions when you need dynamic `this` binding.

### Default, rest, and spread parameters
- default params provide fallback values for missing arguments.
- rest parameters collect extra arguments into an array.
- spread expands arrays or objects into individual items.

### Scope and closures
- global scope is available everywhere.
- function scope hides values inside functions.
- block scope exists in `let`/`const` blocks.
- closures allow inner functions to remember variables from outer scopes.

### Object creation patterns
- object literals are the simplest pattern.
- factory functions return object instances.
- constructor functions and `new` create objects with prototypes.
- ES6 classes are syntax sugar over prototype-based constructors.

### Destructuring and JSON
- destructuring extracts values from arrays and objects into variables.
- `JSON.stringify` converts plain data into a string.
- `JSON.parse` converts JSON back into an object.

## Interview questions and ready answers

### How does `this` get resolved in JavaScript?
`this` is determined by the call site:
- plain function call: `this` is `undefined` in strict mode or the global object otherwise.
- method call: `this` is the object owning the method.
- constructor call with `new`: `this` is the newly created instance.
- explicit binding with `call`/`apply`/`bind`: `this` is the provided object.
- arrow function: `this` is inherited from the outer lexical environment.

### What is a closure and why is it useful?
A closure is a function that retains access to variables from its outer scope even after the outer function returns. It is useful for:
- encapsulating private state
- creating memoization or cache functions
- building factories and event handlers that remember context

Example answer:
"A closure is created when a function references variables from an outer function. It lets us keep data private and preserve state across calls without using globals."

### How do default parameters differ from `arguments`?
Default parameters are explicit in the function signature and work with modern syntax. `arguments` is an array-like object containing all passed values, but it is less descriptive, does not work in arrow functions, and requires manual indexing.

### How do you deep copy an object safely?
For plain JSON-safe data, `JSON.parse(JSON.stringify(obj))` works. For objects with functions, symbols, dates, or prototypes, use a specialized deep clone utility that handles each type explicitly.

### Why use destructuring for function arguments?
Destructuring improves clarity by naming each field at the call site, reduces argument order errors, and supports default values directly in the parameter list.

## Quick revision
- arrow functions inherit `this`; regular functions get their own `this`.
- closures capture variables from outer lexical scopes.
- `...rest` collects remaining arguments; `...spread` expands values.
- use object literals when returning simple data structures.
- `JSON.parse/stringify` is good for simple data transfer but not for complex objects.
