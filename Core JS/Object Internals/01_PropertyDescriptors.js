/*
=========================================
PROPERTY DESCRIPTORS
=========================================

https://javascript.info/keys-values-entries?


Property descriptors define how object properties behave: writability, enumerability, configurability, and accessors.

This file shows how to inspect and define descriptors explicitly.

=========================================
*/

const obj = { name: "JavaScript" };

const descriptor = Object.getOwnPropertyDescriptor(obj, "name");
console.log(descriptor);

Object.defineProperty(obj, "version", {
  value: "ES2023",
  writable: false,
  enumerable: true,
  configurable: false,
});

console.log(obj.version);

try {
  obj.version = "ES2024";
} catch (err) {
  console.log("Cannot write to version");
}

console.log(Object.keys(obj));

/*
Explanation:
- `getOwnPropertyDescriptor` reveals the descriptor for a property.
- `Object.defineProperty` creates a property with explicit behavior.
- Setting `writable: false` prevents changes.
*/
