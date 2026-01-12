//Print 1 to 4 in order in secuence of 1 seconds of gap.

// function printInOrder() {
//   for (let i = 1; i <= 4; i++) {
//     setTimeout(() => console.log(i), i * 1000);
//   }
// }

// printInOrder();

// function printInOrder() {
//   for (let i = 1; i <= 4; i++) {
//     function closure(x) {
//       setTimeout(() => console.log(x), x * 1000);
//     }
//     closure(i);
//   }
// }

// printInOrder();

//----------------------------------

//Data Encapsulation using Closures

// function createCounter() {
//   let count = 0; // private variable

//   return {
//     increment: function () {
//       count++;
//     },
//     decrement() {
//       count--;
//     },
//     print: function () {
//       console.log(count);
//     },
//     get: () => {
//       return count;
//     },
//   };
// }

// const counter = createCounter();
// counter.increment();
// counter.increment();
// counter.print(); // Output: 2
// counter.decrement();
// counter.print(); // Output: 1
// console.log(counter.get()); // Output: 1
//----------------------------------

//Once Function Execution using Closures

// function print(arg) {
//   console.log("Function Executed", arg);
// }

// function once(fn) {
//   let called = false;
//   return function (...args) {
//     if (called) return;
//     called = true;
//     return fn(...args);
//   };
// }

// const printOnce = once(print);
// printOnce("First Call");
// printOnce("Second Call");

//----------------------------------
