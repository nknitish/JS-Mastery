/*
=========================================
MAP, SET, WEAKMAP, WEAKSET
=========================================

These are modern ES6 built-in collections.
They are useful when you need fast lookups, unique values,
weak object references, or memory-safe caches.
*/

// 1) Map
const studentMap = new Map();
studentMap.set("name", "Asha");
studentMap.set("age", 25);
studentMap.set(1, "id");

console.log("map get:", studentMap.get("name"));
console.log("map size:", studentMap.size);
console.log("has age?", studentMap.has("age"));

// Map can use any key type, not just strings
const objKey = { id: 1 };
studentMap.set(objKey, "object-key");
console.log(studentMap.get(objKey));

// Create Map from object entries
const userObject = { name: "Riya", age: 22 };
const userMap = new Map(Object.entries(userObject));
console.log("map from object:", userMap.get("name"));

// Create object from Map
const prices = Object.fromEntries([
  ["apple", 10],
  ["banana", 20],
  ["mango", 30],
]);
console.log("converted object:", prices.apple);

// 2) Set
const uniqueNumbers = new Set([1, 2, 2, 3, 4, 4, 5]);
console.log("set values:", uniqueNumbers);
console.log("set size:", uniqueNumbers.size);
console.log("has 3?", uniqueNumbers.has(3));

// remove duplicates from array
const duplicates = [1, 2, 2, 3, 3, 4];
const uniqueArray = [...new Set(duplicates)];
console.log("unique array:", uniqueArray);

// 3) WeakMap
const weakMap = new WeakMap();
const hero = { name: "Iron Man" };

weakMap.set(hero, "Avengers");
console.log("weakMap value:", weakMap.get(hero));

// WeakMap keys must be objects, not primitives
// weakMap.set('name', 'Asha'); // TypeError

// 4) WeakSet
const weakSet = new WeakSet();
const target = { id: 101 };
weakSet.add(target);
console.log("weakSet has target?", weakSet.has(target));

// WeakSet also only stores objects
// weakSet.add(10); // TypeError

/*
When to use each:

Map:
- dynamic key-value data
- object-like lookups
- preserve insertion order

Set:
- unique items only
- remove duplicates
- fast membership checks

WeakMap:
- private metadata
- temporary cache
- memory-safe object associations

WeakSet:
- track object existence without preventing cleanup
- good for checking if an object was visited
*/

/*
Difference summary:
- Map => key-value pairs, any key type
- Set => unique values only
- WeakMap => object keys, weak references, no iteration
- WeakSet => object values, weak references, no iteration
*/
