/*
=========================================
SYMBOLS AND ITERATORS
=========================================

This file demonstrates symbols and the built-in iterator protocol.
*/

const id = Symbol('id');
const person = {
  [id]: 123,
  name: 'Asha',
};

console.log('symbol property', person[id]);

const iterable = {
  [Symbol.iterator]() {
    let count = 0;
    return {
      next() {
        if (count < 3) {
          return { value: count++, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  },
};

for (const value of iterable) {
  console.log('iterable value', value);
}

/*
Explanation:
- Symbols create unique property keys that do not collide with strings.
- Objects can implement `[Symbol.iterator]` to be consumed by `for...of`.
*/