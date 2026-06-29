//Check if object is empty or not

function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}

let user = {};
console.log(isEmpty(user)); // true //Best approch
console.log(JSON.stringify(user) == "{}"); //true

// The structuredClone method can clone most data types, such as objects, arrays, primitive values.

let obj = {};
// let's create a circular reference:
// obj.me references the obj itself
obj.me = obj;

let clone = structuredClone(obj);
console.log(clone.me === clone); // true
