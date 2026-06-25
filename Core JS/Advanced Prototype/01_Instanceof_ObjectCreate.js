/*
=========================================
INSTANCEOF AND OBJECT.CREATE
=========================================

This file explores how instanceof works and how to create objects with explicit prototypes.

=========================================
*/

function Person(name) {
  this.name = name;
}

const alice = new Person('Alice');
console.log(alice instanceof Person); // true
console.log(alice instanceof Object); // true

const proto = { greet() { return `hello ${this.name}`; } };
const bob = Object.create(proto);
bob.name = 'Bob';
console.log(bob.greet());
console.log(Object.getPrototypeOf(bob) === proto); // true

/*
Explanation:
- `instanceof` checks whether `Person.prototype` exists in the object's prototype chain.
- `Object.create(proto)` creates a new object whose [[Prototype]] is `proto`.
- Using `Object.create` is a clean way to set up prototype-based inheritance without constructors.
*/
