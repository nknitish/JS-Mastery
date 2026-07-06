/*
=========================================
DEFAULT PARAMETERS, REST, AND SPREAD
=========================================

This file explains how to use default parameters, rest parameters, and the spread operator.
*/

// Default parameters allow function arguments to have default values.
function greet(name = "Guest", greeting = "Hello") {
  console.log(`${greeting}, ${name}!`);
}

greet(); // Hello, Guest!
greet("Asha"); // Hello, Asha!

// Rest parameters collect remaining arguments into an array.
function sum(...values) {
  return values.reduce((total, value) => total + value, 0);
}
console.log(sum(1, 2, 3)); // 6

// Spread operator expands an iterable into individual values.
const numbers = [4, 5, 6];
console.log(sum(...numbers)); // 15

/*
Explanation:
- `name = 'Guest'` sets a default if the argument is omitted or undefined.
- `...values` collects all remaining arguments into an array.
- `...numbers` spreads array elements as separate arguments.
*/
