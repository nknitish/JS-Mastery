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
// https://javascript.info/function-object
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

// Ways to create IIFE

(function () {
  console.log("Parentheses around the function");
})();

(function () {
  console.log("Parentheses around the whole thing");
})();

!(function () {
  console.log("Bitwise NOT operator starts the expression");
})();

+(function () {
  console.log("Unary plus starts the expression");
})();

//Length of args

// https://javascript.info/function-object

function abc(a, b, c, ...rest) {
  console.log(Array.from(Object.values(arguments)));
}

abc(1, 3, 5, 6, 7);
console.log(abc.name); // abc
console.log(abc.length); // 3 ...rest will not be counted

// Custom properties

function sayHi() {
  console.log("Hi");

  // let's count how many times we run
  sayHi.counter++;
}
sayHi.counter = 0; // initial value

sayHi(); // Hi
sayHi(); // Hi

console.log(`Called ${sayHi.counter} times`); // Called 2 times

//-------------------------------------------

function sum(a) {
  let currentSum = a;

  function f(b) {
    currentSum += b;
    f.result = currentSum;
    return f;
  }

  f.result = currentSum;

  return f;
}

// console.log(sum(5)(6)(8)(-4).result);

//-------------------------------------------

function sum2(a) {
  let currentSum = a;
  function f(b) {
    currentSum += b;
    return f;
  }

  //Replace defualt toString with fn which return currentSum
  f.toString = () => currentSum;

  return f;
}

console.log(+sum2(5)(6)(8)(-4)); //15

// console.log(sum.toString()); //Return fn
//-------------------------------------------
