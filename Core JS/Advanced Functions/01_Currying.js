/*
=========================================
CURRYING
=========================================

Currying transforms a function that accepts multiple arguments into a sequence of functions that each accept a single argument.
This enables partial application and reusable function composition.

Problem statement:
Implement `curry(fn)` for a fixed-arity function.

=========================================
*/

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function (...nextArgs) {
      return curried.apply(this, args.concat(nextArgs));
    };
  };
}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);
const step1 = curriedAdd(1);
const step2 = step1(2);
const result = step2(3);
console.log(result); // 6

/*
Explanation:
- `curry` returns `curried`, which collects arguments until `fn.length` is reached.
- When enough args exist, it executes the original function.
- Each intermediate call returns a new function that retains previously supplied args.
*/
