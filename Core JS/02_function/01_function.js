//Function Statement
function a() {
  console.log("Function Statement");
}

//Function Expression
const b = function () {
  console.log("Function Expression");
};

//Function Declaration
function c() {
  console.log("Function Declaration");
}

//Named Function Expression
const namedFunc = function named(n) {
  if (n === 10) return n;
  console.log("Named Function Expression", named(n + 1));
};

console.log(namedFunc(10)); // Output: 10

//Arrow Function
const d = () => {
  console.log("Arrow Function");
};

// anonymous function
const e = function () {
  return () => {
    console.log("Inner Anonymous Function");
  };
};

//Difference beteen arguments and parameters

function sum(x, y) {
  // x, y are parameters
  return x + y;
}

console.log(sum(5, 10)); // 5, 10 are arguments

//First-Class Functions

function greet() {
  return function () {
    console.log("Hello from a function returned by another function!");
  };
}

const greeter = greet();
greeter(); // Output: Hello from a function returned by another function!

//Higher-Order Functions

function operateOnNumbers(a, b, operation) {
  return operation(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(operateOnNumbers(2, 10, add)); // Output: 15
console.log(operateOnNumbers(2, 10, multiply)); // Output: 50

//IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("This function runs immediately upon definition!");
})();
