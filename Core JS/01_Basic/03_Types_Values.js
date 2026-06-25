/*
=========================================
TYPES & VALUES
=========================================

This file explains primitive and reference values, null/undefined/NaN/Infinity,
and the difference between copy-by-value and copy-by-reference.
*/

// Primitive values are immutable and stored by value.
const num = 100;
const str = 'hello';
const bool = true;
const undef = undefined;
const none = null;
const sym = Symbol('id');

// Reference values are objects stored in the heap.
const obj = { name: 'JS' };
const arr = [1, 2, 3];

// Copy-by-value example:
let a = 10;
let b = a;
a = 20;
console.log('a', a); // 20
console.log('b', b); // 10

// Copy-by-reference example:
const original = { value: 1 };
const copy = original;
copy.value = 2;
console.log('original.value', original.value); // 2
console.log('copy.value', copy.value); // 2

// null vs undefined:
let x;
console.log(x, typeof x); // undefined 'undefined'
console.log(null, typeof null); // null 'object'

// NaN and Infinity
console.log('0/0 =', 0 / 0); // NaN
console.log('1/0 =', 1 / 0); // Infinity
console.log('isNaN(NaN)?', Number.isNaN(NaN));

/*
Explanation:
- Primitive values are copied by value, so variable assignment creates an independent copy.
- Objects and arrays are copied by reference, so two variables may refer to the same memory location.
- `null` is an intentional absence of value; `undefined` means a variable has not been initialized.
- `NaN` stands for "Not a Number" and results from invalid numeric operations.
- `Infinity` is a special numeric value representing overflow or division by zero.
*/
