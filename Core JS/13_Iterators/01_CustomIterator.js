/*
=========================================
CUSTOM ITERATOR
=========================================

This file implements a simple range iterator using the iterable and iterator protocols.

=========================================
*/

const range = {
  start: 1,
  end: 5,
  [Symbol.iterator]() {
    let current = this.start;
    const end = this.end;

    return {
      next() {
        if (current <= end) {
          return { value: current++, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  },
};

for (const value of range) {
  console.log(value);
}

/*
Output:
1
2
3
4
5

Explanation:
- `range` implements `[Symbol.iterator]` returning an iterator.
- Each `next()` call returns the next value until `done: true`.
- `for...of` consumes the iterator protocol automatically.
*/