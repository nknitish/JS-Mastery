/*
=========================================
OBJECT IMMUTABILITY
=========================================

Demonstrates Object.freeze, Object.seal, and Object.preventExtensions.
*/

const instance = { name: 'JS' };
Object.freeze(instance);

try {
  instance.name = 'JavaScript';
} catch (err) {
  console.log('Cannot change frozen object');
}

console.log(instance.name);

const sealed = { a: 1 };
Object.seal(sealed);
sealed.a = 2;
console.log(sealed.a); // 2

const extensible = { b: 1 };
Object.preventExtensions(extensible);
try {
  extensible.c = 3;
} catch (err) {
  console.log('Cannot add property');
}
