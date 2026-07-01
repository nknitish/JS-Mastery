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

// ---------------  Property Descriptor  ----------------------//

// https://javascript.info/property-descriptors

/**
 *
 * Property flags
 * Object properties, besides a value, have three special attributes (so-called “flags”):
 * writable – if true, the value can be changed, otherwise it’s read-only.
 * enumerable – if true, then listed in loops, otherwise not listed.
 * configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.
 *
 */

let emp = {
  name: "John",
};

let descriptor = Object.getOwnPropertyDescriptor(emp, "name");
console.log(descriptor);

// Updating values
emp.name = "Nk";
console.log(emp);

//Object.defineProperty(obj, propertyName, descriptor)

Object.defineProperty(emp, "name", {
  writable: false,
});

descriptor = Object.getOwnPropertyDescriptor(emp, "name");
console.log(descriptor);

emp.name = "Mishra"; // Won't work
console.log(emp);

//https://javascript.info/property-accessors
