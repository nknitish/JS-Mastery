/*
=========================================
SYMBOLS, ITERATORS, AND GENERATORS
=========================================

These are important ES6 features used for unique keys,
custom iteration, and data traversal.
*/

// 1) Symbol
const id = Symbol("id");
const person = {
  [id]: 101,
  name: "Asha",
};

console.log("symbol key value:", person[id]);
console.log("person object:", person);

// Symbols are unique and avoid collision
const anotherId = Symbol("id");
console.log("same description but different symbol:", id === anotherId);

// 2) Symbol in object keys
const user = {
  [Symbol("private")]: "secret",
  role: "admin",
};

console.log(user.role);
console.log(Object.keys(user)); // only normal enumerable keys

// 3) Iterators
const numbers = [10, 20, 30];
const iterator = numbers[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// 4) for...of loop
for (const value of numbers) {
  console.log("for-of value:", value);
}

// 5) custom iterable object
const range = {
  start: 1,
  end: 4,
  [Symbol.iterator]() {
    let current = this.start;
    return {
      next: () => {
        if (current <= this.end) {
          return { value: current++, done: false };
        }
        return { done: true };
      },
    };
  },
};

console.log("custom range:", [...range]);

// 6) generators
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = numberGenerator();
console.log("generator next 1:", generator.next());
console.log("generator next 2:", generator.next());
console.log("generator next 3:", generator.next());
console.log("generator done:", generator.next());

/*
Why this matters:
- Symbol gives unique property keys
- Iterators allow custom traversal
- for...of works on iterables like arrays, sets, and maps
- generators make lazy iteration easier
*/

/*
ES6 summary:
- Symbol -> unique identity
- Iterator -> standard way to loop values
- Generator -> special function that can pause and resume
*/
