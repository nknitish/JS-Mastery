/*
=========================================
MAP, SET, WEAKMAP, WEAKSET
=========================================

This file shows how to use modern built-in collections and when they are preferable.
*/

/**

new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the element (the key/value pair) by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count. 
*/

// https://javascript.info/map-set

const map = new Map();
map.set("key", "value");
map.set({}, "object");
console.log(map.get("key"));
console.log("map size", map.size);

// Create Map from Object

let mapFromObject = new Map(
  Object.entries({
    name: "John",
    age: 30,
  }),
);

console.log(mapFromObject.get("name")); //John

// Create object form Map
// https://javascript.info/map-set#object-fromentries-object-from-map

let prices = Object.fromEntries([
  ["banana", 1],
  ["orange", 2],
  ["meat", 4],
]);

// now prices = { banana: 1, orange: 2, meat: 4 }

console.log(prices.orange); // 2

//-------------------------------------------------------------------------

/**
A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

Its main methods are:

new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.

 */

console.log("----------------- SET -----------------------");
const set = new Set([1, 2, 2, 3]);
console.log("set has 2", set.has(2));
console.log("set size", set.size);

// Ex 1 Filter anagrams
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  let map = new Map();
  for (let word of arr) {
    let sorted = word.toLowerCase().split("").sort().join("");
    map.set(sorted, word);
  }

  return Array.from(map.values());
}

console.log(aclean(arr));

//-------------------------------------------------------------------------

// https://javascript.info/weakmap-weakset

/**
 * The first difference between Map and WeakMap is that keys must be objects, not primitive values:
 *
 */

console.log("----------------- WEAK MAP -----------------------");

const weakMap = new WeakMap();
const obj = {};
weakMap.set(obj, "data");
console.log("weakMap has obj", weakMap.has(obj));

//-------------------------------------------------------------------------

console.log("----------------- WEAK SET -----------------------");

const weakSet = new WeakSet();
weakSet.add(obj);
console.log("weakSet has obj", weakSet.has(obj));

/*
Explanation:
- Map can use object keys and preserves insertion order.
- Set stores unique values.
- WeakMap keys are weakly held and not enumerable, enabling memory-sensitive caches.
- WeakSet stores objects and allows garbage collection when there are no other references.
*/
