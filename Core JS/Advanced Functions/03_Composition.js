/*
=========================================
FUNCTION COMPOSITION
=========================================

Composition builds a new function by chaining existing functions.
The output of one function becomes the input of the next.

=========================================
*/

function compose(...fns) {
  return function (initialValue) {
    return fns.reduceRight((value, fn) => fn(value), initialValue);
  };
}

function trim(text) {
  return text.trim();
}

function toLower(text) {
  return text.toLowerCase();
}

function addExclamation(text) {
  return `${text}!`;
}

const shout = compose(addExclamation, toLower, trim);
console.log(shout('  Hello WORLD  ')); // hello world!

/*
Explanation:
- `compose` returns a function that applies provided functions right-to-left.
- `trim` runs first, then `toLower`, then `addExclamation`.
- Composition is useful for building pipelines from small functions.
*/
