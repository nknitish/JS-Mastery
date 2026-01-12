const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const multiply = (a, b) => a * b;
const div = (a, b) => a / b;

function calculate(a, b, fn) {
  return fn(a, b);
}

console.log(calculate(1, 5, sum));
console.log(calculate(10, 5, sub));
console.log(calculate(10, 5, multiply));
console.log(calculate(10, 5, div));
