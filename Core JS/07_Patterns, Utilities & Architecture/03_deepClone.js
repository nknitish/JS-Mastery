// deepClone(value)
// Should clone:
// - Objects
// - Arrays
// - Dates
// - RegExps
// - Nested structures
// - Circular references (via Map)
// Should return a fully independent deep copy.

const deepClone = (value) => {
  // Handle primitives
  if (value === null || typeof value !== "object") {
    return value;
  }

  // Handle Date
  if (value instanceof Date) {
    return new Date(value);
  }

  // Handle RegExp
  if (value instanceof RegExp) {
    return new RegExp(value);
  }

  // Handle Array
  if (Array.isArray(value)) {
    return value.map((item) => deepClone(item));
  }

  // Handle Object
  const result = {};

  for (const key in value) {
    if (value.hasOwnProperty(key)) {
      result[key] = deepClone(value[key]);
    }
  }

  return result;
};

// ------------------
// Tests
// ------------------

// 1. Basic nested structure
const obj1 = { a: 1, b: { c: 2 } };
const clone1 = deepClone(obj1);

console.log(clone1); // Expected: { a: 1, b: { c: 2 } }
console.log(clone1.b === obj1.b); // Expected: false

// 2. Arrays
const arr1 = [1, [2, 3]];
const clone2 = deepClone(arr1);

console.log(clone2); // Expected: [1, [2, 3]]
console.log(clone2[1] === arr1[1]); // Expected: false

// 3. Date
// const d1 = new Date();
// const cloneD = deepClone(d1);
// console.log(cloneD instanceof Date); // Expected: true
// console.log(cloneD.getTime() === d1.getTime()); // Expected: true

// 4. RegExp
// const r1 = /abc/gi;
// const cloneR = deepClone(r1);
// console.log(cloneR instanceof RegExp); // Expected: true
// console.log(cloneR.source === r1.source); // Expected: true
// console.log(cloneR.flags === r1.flags); // Expected: true

// 5. Circular reference
// const circular = { name: "nitish" };
// circular.self = circular;

// const cloneC = deepClone(circular);
// console.log(cloneC.self === cloneC); // Expected: true
// console.log(cloneC === circular); // Expected: false

// 6. Functions (copy reference)
// function fn(x) {
//   return x + 1;
// }
// const objF = { f: fn };
// const cloneF = deepClone(objF);
// console.log(cloneF.f === fn); // Expected: true
