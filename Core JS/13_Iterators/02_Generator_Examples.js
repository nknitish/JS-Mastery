// Generator function examples and iterable usage.

function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

const numbers = range(1, 5);
for (const value of numbers) {
  console.log('range value', value);
}

function* fibonacci(limit) {
  let a = 0;
  let b = 1;
  while (limit-- > 0) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const sequence = fibonacci(6);
console.log('fibonacci next', sequence.next().value);
console.log('fibonacci next', sequence.next().value);

// Notes:
// - Generators return an iterator object.
// - `yield` pauses execution and returns control to the caller.
// - Generators are useful for lazy sequences and async control flows.
