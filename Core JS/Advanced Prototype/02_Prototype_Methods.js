/*
=========================================
PROTOTYPE METHODS
=========================================

This file demonstrates `hasOwnProperty`, `isPrototypeOf`, and `Object.assign` with prototypes.

=========================================
*/

const base = { type: 'base' };
const derived = Object.create(base);
derived.name = 'child';

console.log(derived.hasOwnProperty('name')); // true
console.log(derived.hasOwnProperty('type')); // false
console.log(base.isPrototypeOf(derived)); // true

const target = { a: 1 };
const source = { b: 2 };
Object.assign(target, source);
console.log(target); // { a: 1, b: 2 }

/*
Explanation:
- `hasOwnProperty` checks only own properties, not inherited ones.
- `isPrototypeOf` verifies prototype chain membership.
- `Object.assign` copies enumerable own properties from sources to target.
*/
