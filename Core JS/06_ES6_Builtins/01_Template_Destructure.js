/*
=========================================
TEMPLATE LITERALS AND DESTRUCTURING
=========================================

This file demonstrates template literals, object destructuring, and array destructuring.
*/

const user = {
  name: 'Asha',
  age: 28,
  address: {
    city: 'Delhi',
    zip: 110001,
  },
};

const greeting = `Hello ${user.name},
Welcome to ES6.`;
console.log(greeting);

const { name, address: { city } } = user;
console.log(name, city);

const numbers = [10, 20, 30];
const [first, , third] = numbers;
console.log(first, third);

const userWithDefaults = { name: 'Mia' };
const { name: userName, age = 25 } = userWithDefaults;
console.log(userName, age);

/*
Explanation:
- Template literals use backticks and `${}` interpolation.
- Object destructuring extracts nested properties.
- Array destructuring skips values with commas.
- Default values can be provided during destructuring.
*/