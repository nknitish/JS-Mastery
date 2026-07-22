const deepCompare = (val1, val2) => {
  // Different types can never be equal
  if (typeof val1 !== typeof val2) {
    return false;
  }

  // Primitive values (number, string, boolean, null, undefined, etc.)
  if (val1 === null || typeof val1 !== "object") {
    return val1 === val2;
  }

  // One is an array and the other is an object
  if (Array.isArray(val1) !== Array.isArray(val2)) {
    return false;
  }

  // Array comparison
  if (Array.isArray(val1)) {
    if (val1.length !== val2.length) return false;

    return val1.every((item, index) => {
      return deepCompare(item, val2[index]);
    });
  }

  // Object comparison
  const keys1 = Object.keys(val1);
  const keys2 = Object.keys(val2);

  // Different number of properties
  if (keys1.length !== keys2.length) return false;

  // Compare every property recursively
  for (const key of keys1) {
    if (!Object.hasOwn(val2, key)) return false;

    if (!deepCompare(val1[key], val2[key])) {
      return false;
    }
  }

  return true;
};

// 1. Primitive
console.log(deepCompare(5, 5)); // true

// 2. Different Types
console.log(deepCompare(5, "5")); // false

// 3. Array
console.log(deepCompare([1, 2], [1, 2])); // true

// 4. Nested Array
console.log(deepCompare([1, [2, 3]], [1, [2, 3]])); // true

// 5. Simple Object
console.log(deepCompare({ a: 1, b: 2 }, { b: 2, a: 1 })); // true

// 6. Nested Object
console.log(deepCompare({ a: { b: 1 } }, { a: { b: 2 } })); // false

// 7. Object + Array
console.log(deepCompare({ a: { b: [1, 2] } }, { a: { b: [1, 2] } })); // true

// 8. Missing Property
console.log(deepCompare({ a: 1 }, { a: 1, b: 2 })); // false
