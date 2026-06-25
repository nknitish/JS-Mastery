// Deep clone implementation for objects and arrays.

function deepClone(value, seen = new WeakMap()) {
  if (value === null || typeof value !== 'object') {
    return value;
  }

  if (seen.has(value)) {
    return seen.get(value);
  }

  if (Array.isArray(value)) {
    const copy = [];
    seen.set(value, copy);
    value.forEach((item, index) => {
      copy[index] = deepClone(item, seen);
    });
    return copy;
  }

  if (value instanceof Date) {
    return new Date(value);
  }

  if (value instanceof RegExp) {
    return new RegExp(value.source, value.flags);
  }

  const copy = Object.create(Object.getPrototypeOf(value));
  seen.set(value, copy);

  Reflect.ownKeys(value).forEach((key) => {
    copy[key] = deepClone(value[key], seen);
  });

  return copy;
}

const original = {
  name: 'Test',
  nested: { value: 10 },
  list: [1, 2, { nested: true }],
};

const cloned = deepClone(original);
console.log('cloned nested value', cloned.nested.value);
console.log('same object?', cloned !== original, cloned.nested !== original.nested);
