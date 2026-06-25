// Output question puzzles: predict the console output.

// 1. Hoisting and declarations
console.log('1:', typeof hoistedVar, typeof hoistedLet);
var hoistedVar = 'var value';
let hoistedLet = 'let value';

// 2. Closure and loop trap
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log('2:', i), 0);
}

// 3. This binding
const obj = {
  value: 10,
  getValue() {
    return this.value;
  }
};
const detached = obj.getValue;
console.log('3:', obj.getValue(), detached());

// 4. Promise microtask ordering
Promise.resolve().then(() => console.log('4: promise resolved'));
setTimeout(() => console.log('4: timeout'), 0);
console.log('4: sync');

// 5. Prototype chain
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  return `Hello ${this.name}`;
};
const user = new Person('Alice');
console.log('5:', user.greet(), user instanceof Person);

// 6. Short-circuit and default values
const result = null ?? 'default';
console.log('6:', result, null || 'fallback');

// 7. Iterators and for...of
const iterable = {
  data: [1, 2, 3],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.data.length) {
          return { value: this.data[index++], done: false };
        }
        return { value: undefined, done: true };
      }
    };
  }
};
for (const item of iterable) {
  console.log('7:', item);
}

// 8. Async/await error handling
async function demo() {
  try {
    await Promise.reject('rejected');
  } catch (err) {
    console.log('8:', err);
  }
}
demo();
