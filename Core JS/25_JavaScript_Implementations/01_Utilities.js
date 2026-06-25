// Utility functions for common JavaScript implementations

// 1. Simple memoize helper for pure functions
function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

// 2. Curry helper to turn a function into a chainable call sequence
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function(...nextArgs) {
      return curried.apply(this, [...args, ...nextArgs]);
    };
  };
}

// 3. Simple publish/subscribe event bus
class EventBus {
  constructor() {
    this.handlers = new Map();
  }

  subscribe(event, callback) {
    if (!this.handlers.has(event)) {
      this.handlers.set(event, []);
    }
    this.handlers.get(event).push(callback);
  }

  publish(event, payload) {
    const handlers = this.handlers.get(event) || [];
    handlers.forEach(cb => cb(payload));
  }
}

// 4. A small custom iterator for a range
function rangeIterator(start, end, step = 1) {
  return {
    current: start,
    end,
    step,
    next() {
      if (this.current <= this.end) {
        return { value: this.current, done: false, next: (this.current += this.step) - this.step };
      }
      return { value: undefined, done: true };
    }
  };
}

// Example usage
const fib = memoize(n => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
});

const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);
const eventBus = new EventBus();
const iterator = rangeIterator(1, 5);

eventBus.subscribe('data', value => console.log('data event', value));
eventBus.publish('data', { id: 1 });

console.log('memoized fib(10)=', fib(10));
console.log('curried add=', curriedAdd(1)(2)(3));
console.log('iterator next=', iterator.next());
