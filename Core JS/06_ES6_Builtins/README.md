# ES6 Fundamentals

This folder is dedicated to ES6+ features and modern JavaScript syntax.

## Why ES6 matters

ES6 introduced cleaner syntax, better structure, and safer patterns for writing JavaScript. It makes code shorter, easier to read, and more maintainable.

## What is new in ES6?

Some of the biggest additions were:

- `let` and `const`
- arrow functions
- template literals
- destructuring
- default parameters
- rest and spread operators
- enhanced object literals
- classes
- modules (`import` / `export`)
- Promises
- `async` / `await`
- `Map`, `Set`, `WeakMap`, `WeakSet`
- `Symbol`
- iterators and generators

## Core ES6 features

### 1) `let` and `const`

`let` allows block-scoped variables and `const` creates constants.

```js
let count = 1;
count = 2;

const user = { name: "Asha" };
// user = {} // error
```

### 2) Arrow functions

Arrow functions provide shorter syntax and keep lexical `this` binding.

```js
const add = (a, b) => a + b;
console.log(add(2, 3));
```

### 3) Template literals

Template strings allow string interpolation and multi-line text.

```js
const name = "Asha";
const greeting = `Hello ${name}!`;
console.log(greeting);
```

### 4) Destructuring

This extracts values from arrays and objects into variables.

```js
const user = { name: "Neha", age: 24 };
const { name, age } = user;

const numbers = [10, 20, 30];
const [first, second] = numbers;
```

### 5) Default parameters

```js
function greet(name = "Guest") {
  return `Hello ${name}`;
}
```

### 6) Rest and spread

```js
function sum(...nums) {
  return nums.reduce((total, n) => total + n, 0);
}

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
```

### 7) Object shorthand

```js
const name = "Asha";
const age = 25;
const user = { name, age };
```

### 8) Classes

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hi, I am ${this.name}`;
  }
}
```

### 9) Modules

```js
// app.js
import { sum } from "./math.js";
console.log(sum(2, 3));
```

### 10) Promises and async/await

```js
const fetchData = () => Promise.resolve("done");

fetchData().then(console.log);
```

```js
async function run() {
  const value = await fetchData();
  console.log(value);
}
```

## Map

`Map` is a collection of key-value pairs where keys can be any type.

```js
const studentMap = new Map();
studentMap.set("name", "Riya");
studentMap.set(1, "ID");
studentMap.set({ id: 1 }, "object key");

console.log(studentMap.get("name"));
console.log(studentMap.size);
```

### Why use `Map`?

- preserves insertion order
- allows any data type as key
- no prototype-key collisions like plain objects
- useful for caches, lookups, and metadata

### Map vs object

```js
const obj = { name: "Asha" };
const map = new Map([["name", "Asha"]]);
```

Use object for fixed data and Map for dynamic key-value storage.

## Set

`Set` stores unique values only.

```js
const numbers = new Set([1, 2, 2, 3, 3, 4]);
console.log(numbers); // Set(4) { 1, 2, 3, 4 }
```

### Why use `Set`?

- removes duplicates automatically
- fast membership checks
- good for unique IDs, tags, or filtering

```js
const uniqueNames = new Set(["Asha", "Riya", "Asha"]);
console.log(uniqueNames.size); // 2
```

## WeakMap

`WeakMap` is like `Map`, but only accepts object keys and does not prevent garbage collection.

```js
const weakMap = new WeakMap();
const user = { name: "Asha" };

weakMap.set(user, "active");
console.log(weakMap.get(user));
```

### Why use `WeakMap`?

- memory-friendly
- keys are weakly referenced
- not enumerable
- useful for private metadata and caches

## WeakSet

`WeakSet` stores unique objects only and also allows garbage collection.

```js
const weakSet = new WeakSet();
const obj = { id: 1 };

weakSet.add(obj);
console.log(weakSet.has(obj));
```

### Why use `WeakSet`?

- stores only objects
- no memory leaks from stale references
- useful for tracking objects that should not stay alive unnecessarily

## Symbol

`Symbol` creates unique values that are not equal to any other symbol.

```js
const id = Symbol("id");
const person = {
  [id]: 101,
  name: "Asha",
};

console.log(person[id]);
```

### Why use `Symbol`?

- creates hidden, collision-free property keys
- useful for metadata and library internals

## Iterators and generators

ES6 introduced the iterator protocol and `for...of` loops.

```js
const arr = [10, 20, 30];
for (const num of arr) {
  console.log(num);
}
```

```js
function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generateNumbers();
console.log(gen.next().value);
```

## Quick interview summary

### What is ES6?

ES6 is the modern JavaScript standard introduced in 2015. It added cleaner syntax and better features.

### Why use `Map` instead of object?

Because `Map` supports any key type, keeps insertion order, and avoids object prototype issues.

### Why use `Set`?

Because it automatically removes duplicates and checks membership quickly.

### Why use `WeakMap` and `WeakSet`?

Because they are memory-efficient and do not keep objects alive unnecessarily.

### What is a Symbol?

A Symbol is a unique primitive used for non-conflicting property names and hidden metadata.

## Best practice

Use:

- `let` and `const` for variables
- arrow functions for short callbacks
- `Map` for dynamic key-value data
- `Set` for unique values
- `WeakMap`/`WeakSet` for weak reference use cases
- `async`/`await` for asynchronous code

---

This folder is meant to become your ES6 study base.
