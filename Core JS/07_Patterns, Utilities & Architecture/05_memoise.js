const add = (a, b) => {
  console.log("Calculating...");
  return a + b;
};

const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    let key = JSON.stringify(args);

    if (!cache[key]) {
      cache[key] = fn(...args);
    }

    return cache[key];
  };
};

const memoizedAdd = memoize(add);

console.log(memoizedAdd(2, 3)); // Calculating... 5
console.log(memoizedAdd(2, 3)); // 5 (cached)
console.log(memoizedAdd(3, 4)); // Calculating... 7
console.log(memoizedAdd(2, 3)); // 5 (cached)
