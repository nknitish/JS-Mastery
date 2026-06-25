/*
=========================================
REFLECT AND PROXY
=========================================

This file shows how to use Reflect for safe property operations and Proxy for validation.

=========================================
*/

const target = { name: 'JS', age: 0 };

const handler = {
  get(obj, prop) {
    console.log(`get ${String(prop)}`);
    return Reflect.get(obj, prop);
  },
  set(obj, prop, value) {
    if (prop === 'age' && typeof value !== 'number') {
      throw new TypeError('age must be a number');
    }
    return Reflect.set(obj, prop, value);
  },
  deleteProperty(obj, prop) {
    if (prop === 'name') {
      throw new Error('Cannot delete name');
    }
    return Reflect.deleteProperty(obj, prop);
  },
};

const proxy = new Proxy(target, handler);
console.log(proxy.name);
proxy.age = 5;

try {
  proxy.age = 'five';
} catch (err) {
  console.log(err.message);
}

try {
  delete proxy.name;
} catch (err) {
  console.log(err.message);
}

/*
Explanation:
- `Reflect` methods mirror default object operations but return boolean success values.
- `Proxy` traps let you intercept `get`, `set`, and `deleteProperty` and add validation.
*/
