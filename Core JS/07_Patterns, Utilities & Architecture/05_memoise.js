function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache[key]) {
      return cache[key];
    }
    // If not cached, execute the original function
    const result = fn.apply(this, args);

    // Store the result in the cache before returning
    cache[key] = result;
    return result;
  };
}

const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);
console.log(memoizedSum(3, 4));
