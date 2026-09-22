/*
=========================================
ES6 FEATURES: let/const, arrow, template, destructuring, default params, rest/spread
=========================================
*/

// 1) let and const
let count = 1;
count = 2;

const user = {
  name: "Asha",
  age: 28,
};

console.log("count:", count);
console.log("user:", user);

// 2) arrow functions
const add = (a, b) => a + b;
console.log("sum:", add(5, 10));

const multiplyByTwo = (number) => number * 2;
console.log("double:", multiplyByTwo(8));

// 3) template literals
const name = "Riya";
const greeting = `Hello ${name}, welcome to ES6!`;
console.log(greeting);

// 4) default parameters
function welcomeUser(userName = "Guest") {
  return `Welcome ${userName}`;
}

console.log(welcomeUser());
console.log(welcomeUser("Amit"));

// 5) destructuring objects
const product = {
  productName: "Laptop",
  price: 65000,
  stock: 12,
};

const { productName, price } = product;
console.log(productName, price);

// nested destructuring
const student = {
  name: "Neha",
  address: {
    city: "Delhi",
  },
};

const {
  address: { city },
} = student;
console.log("city:", city);

// 6) destructuring arrays
const numbers = [10, 20, 30, 40];
const [first, second, , fourth] = numbers;
console.log(first, second, fourth);

// 7) rest operator
function printValues(...values) {
  console.log("rest:", values);
}

printValues("x", "y", "z");

// 8) spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];
console.log("spread:", arr2);

// 9) object shorthand
const age = 25;
const person = { name, age };
console.log("person:", person);

// 10) computed properties
const key = "email";
const userDetails = {
  [key]: "asha@example.com",
  name: "Asha",
};
console.log(userDetails);

/*
Key ES6 ideas:
- let and const avoid common scoping issues
- arrow functions are short and keep lexical this
- destructuring makes code cleaner
- spread/rest help with arrays and functions
- template literals improve readability
*/
