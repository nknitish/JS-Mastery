//------------------------------------------------------------

let obj = {
  name: "Nk",
};

function printName(age) {
  console.log("My name is : ", this.name, "My Age is :", age);
}

//------------------------------------------------------------

// Call Polyfill

Function.prototype.myCall = function (context = {}, ...arg) {
  if (typeof this !== "function") {
    throw new Error(this, " is not callable");
  }

  context.fn = this;
  context.fn(...arg);
};

printName.myCall(obj, 25);

//------------------------------------------------------------

// Apply

Function.prototype.myApply = function (context = {}, arg = []) {
  //Error Handling ..
  if (typeof this !== "function") {
    throw new Error(this, +" is not callable");
  }

  if (!Array.isArray(arg)) {
    throw new Error("Arguments must be an array");
  }

  context.fn = this;
  context.fn(...arg);
};

printName.apply(obj, [23, 29]);

//------------------------------------------------------------

//Bind

Function.prototype.myBind = function (context = {}, ...bindArgs) {
  if (typeof this !== "function") {
    throw new TypeError("myBind must be called on a function");
  }
  const originalFn = this;

  function boundFn(...newArgs) {
    return originalFn.apply(context, [...bindArgs, ...newArgs]);
  }

  return boundFn;
};

let fn = printName.myBind(obj);

console.log(fn);
fn(27);

//------------------------------------------------------------
