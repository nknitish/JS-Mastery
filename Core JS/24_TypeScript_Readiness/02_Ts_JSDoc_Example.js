// JSDoc-style typing to show TypeScript-readiness in plain JS files

/**
 * @template T
 * @param {T[]} arr
 * @returns {T[]}
 */
function clone(arr){
  return arr.slice();
}

/**
 * @typedef {{id:number, name:string}} User
 */

/** @param {User} u */
function greet(u){
  return `Hello ${u.name}`;
}

console.log('JSDoc typing examples: ', clone([1,2,3]), greet({id:1,name:'Sam'}));
