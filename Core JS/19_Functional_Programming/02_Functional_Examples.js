// Functional programming examples in JavaScript.

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((n) => n * 2);
const evens = numbers.filter((n) => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);

const compose = (f, g) => (x) => f(g(x));
const increment = (x) => x + 1;
const square = (x) => x * x;
const incrementThenSquare = compose(square, increment);

console.log('doubled', doubled);
console.log('evens', evens);
console.log('sum', sum);
console.log('compose result', incrementThenSquare(4));
