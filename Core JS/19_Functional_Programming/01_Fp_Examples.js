/*
=========================================
FUNCTIONAL PROGRAMMING EXAMPLES
=========================================

This file demonstrates pure functions, immutability, composition, and common array transforms.
*/

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function compose(...fns) {
  return (value) => fns.reduceRight((acc, fn) => fn(acc), value);
}

function pipe(...fns) {
  return (value) => fns.reduce((acc, fn) => fn(acc), value);
}

const double = (n) => n * 2;
const increment = (n) => n + 1;

const doubleThenIncrement = pipe(double, increment);
console.log(doubleThenIncrement(3)); // 7

const numbers = [1, 2, 3, 4];
const squared = numbers.map((n) => n * n);
const evens = numbers.filter((n) => n % 2 === 0);
const sum = numbers.reduce((total, n) => total + n, 0);
console.log(squared, evens, sum);

const user = { name: "Asha", age: 28 };
const updated = { ...user, age: 29 };
console.log(user, updated);

/*
Explanation:
- pure functions do not mutate input values.
- `compose` chains functions right-to-left; `pipe` chains left-to-right.
- spread syntax creates immutable copies of objects.
- `map`, `filter`, and `reduce` process arrays declaratively.
*/
