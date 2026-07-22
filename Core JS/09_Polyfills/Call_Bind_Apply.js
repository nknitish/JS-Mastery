//------------------------------------------------------------

let obj = {
  name: "Nk",
};

function printName(...args) {
  console.log(`Hi, My Name is ${this.name} args= ${args}`);
}

//------------------------------------------------------------

// Call Polyfill

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

printName.myCall(obj, 25);

//------------------------------------------------------------

// Apply

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

printName.myApply(obj, [23, 29]);

//------------------------------------------------------------

//Bind

Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("myBind must be called on a function");
  }

  const self = this;

  return function (...extraArgs) {
    return self.apply(context, [...args, ...extraArgs]);
  };
};

let fn = printName.myBind(obj, 1, 2);

fn(27);

//------------------------------------------------------------
