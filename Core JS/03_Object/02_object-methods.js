// https://javascript.info/object-methods

// This keyword

var user = {
  name: "John",
  age: 30,
  sayHi() {
    console.log(this.name); // user leads to an error, this works fine
  },
};

let admin = user;
user = null; // overwrite to make things obvious
admin.sayHi();

// Arrow functions have no “this”
// Arrow functions are special: they don’t have their “own” this. If we reference this from such a function, it’s taken from the outer “normal” function.

// For instance, here arrow() uses this from the outer user.sayHi() method:

var user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => console.log(this.firstName);
    arrow();
  },
};

user.sayHi(); // Ilya

//--------------------------------------------------------------------

let calculator = {
  result: 1,
  init(num) {
    this.result = num;
    return this;
  },

  add(num) {
    this.result = this.result + num;
    return this;
  },
  mul(num) {
    this.result = this.result * num;
    return this;
  },
};

console.log(calculator.init(3).add(5).mul(10).result); // 80

//-----------------------------------------------------------------------
