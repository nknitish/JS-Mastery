/*
=========================================
SERIALIZATION AND CLONING
=========================================

This file demonstrates JSON serialization, structuredClone, and a simple circular-safe clone.
*/

const user = { name: "Asha", age: 28, preferences: { theme: "dark" } };
const json = JSON.stringify(user);
console.log("json", json);
const restored = JSON.parse(json);
console.log("restored", restored);

const clone = structuredClone(user);
console.log("structured clone", clone);

const circular = { name: "loop" };
circular.self = circular;

function deepCloneCircular(value, visited = new Map()) {
  if (value === null || typeof value !== "object") {
    return value;
  }
  if (visited.has(value)) {
    return visited.get(value);
  }
  const copy = Array.isArray(value) ? [] : {};
  visited.set(value, copy);
  for (const key in value) {
    if (value.hasOwnProperty(key)) {
      copy[key] = deepCloneCircular(value[key], visited);
    }
  }
  return copy;
}

const circularClone = deepCloneCircular(circular);
console.log(
  "circularClone.self === circularClone",
  circularClone.self === circularClone,
);

/*
Explanation:
- JSON is useful for plain data but cannot clone functions, symbols, or circular graphs.
- `structuredClone` supports more JS types and preserves object structure.
- circular-safe clone uses a map of visited objects to avoid infinite recursion.
*/
