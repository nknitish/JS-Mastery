/*
=========================================
MAP, SET, WEAKMAP, WEAKSET
=========================================

This file shows how to use modern built-in collections and when they are preferable.
*/

const map = new Map();
map.set('key', 'value');
map.set({}, 'object');
console.log(map.get('key'));
console.log('map size', map.size);

const set = new Set([1, 2, 2, 3]);
console.log('set has 2', set.has(2));
console.log('set size', set.size);

const weakMap = new WeakMap();
const obj = {};
weakMap.set(obj, 'data');
console.log('weakMap has obj', weakMap.has(obj));

const weakSet = new WeakSet();
weakSet.add(obj);
console.log('weakSet has obj', weakSet.has(obj));

/*
Explanation:
- Map can use object keys and preserves insertion order.
- Set stores unique values.
- WeakMap keys are weakly held and not enumerable, enabling memory-sensitive caches.
- WeakSet stores objects and allows garbage collection when there are no other references.
*/