/*
=========================================
MEMOIZATION
=========================================

Memoization caches results of a pure function so repeated calls with the same arguments return stored results instead of recomputing.

Problem statement:
Implement `memoize(fn)` for functions with primitive arguments.

=========================================
*/

function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

function slowMultiply(a, b) {
  console.log('computing');
  return a * b;
}

const memoizedMultiply = memoize(slowMultiply);
console.log(memoizedMultiply(2, 3)); // computing 6
console.log(memoizedMultiply(2, 3)); // 6 (cached)

/*
Explanation:
- We use a Map keyed by the JSON stringified arguments.
- The cached value is returned on later calls with identical inputs.
- This only works reliably for primitive or stable serializable args.
*/
