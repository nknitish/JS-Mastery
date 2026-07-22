// Custom implementations of core JS utilities for interviews.

Function.prototype.myCall = function (context = globalThis, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("myCall must be called on a function");
  }

  const fn = Symbol();
  context[fn] = this;

  try {
    return context[fn](...args);
  } finally {
    delete context[fn];
  }
};

// ProtoType
Function.prototype.myApply = function (context, args = []) {
  if (typeof this !== "function") {
    throw new TypeError("myApply must be called on a function");
  }

  if (!Array.isArray(args)) {
    throw new TypeError("CreateListFromArrayLike called on non-object");
  }

  const fn = Symbol();
  context[fn] = this;

  try {
    return context[fn](...args);
  } finally {
    delete context[fn];
  }
};

Function.prototype.myBind = function (context = globalThis, ...bindArgs) {
  if (typeof this !== "function") {
    throw new TypeError("myBind must be called on a function");
  }
  const self = this;
  function boundFunction(...callArgs) {
    const isNew = this instanceof boundFunction;
    return self.apply(isNew ? this : context, [...bindArgs, ...callArgs]);
  }
  boundFunction.prototype = Object.create(self.prototype);
  return boundFunction;
};

function myNew(Constructor, ...args) {
  if (typeof Constructor !== "function") {
    throw new TypeError("myNew expects a constructor");
  }
  const instance = Object.create(Constructor.prototype);
  const result = Constructor.apply(instance, args);
  return result !== null &&
    (typeof result === "object" || typeof result === "function")
    ? result
    : instance;
}

function myInstanceOf(object, constructor) {
  if (typeof constructor !== "function") {
    throw new TypeError("Right-hand side of instanceof is not callable");
  }
  let proto = Object.getPrototypeOf(object);
  const prototype = constructor.prototype;
  while (proto) {
    if (proto === prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}

// Example usage
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  return `Hello ${this.name}`;
};

const alice = myNew(Person, "Alice");
console.log("myNew greeting", alice.greet());
console.log("myInstanceOf", myInstanceOf(alice, Person));

const obj = { value: 42 };
function showValue(arg) {
  return this.value + arg;
}

console.log("myCall result", showValue.myCall(obj, 8));
console.log("myApply result", showValue.myApply(obj, [8]));
const bound = showValue.myBind(obj, 8);
console.log("myBind result", bound());
