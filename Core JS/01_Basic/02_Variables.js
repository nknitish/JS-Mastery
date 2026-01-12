//Temperroal Dead Zone (TDZ) is a behavior in JavaScript where variables declared with let and const cannot be accessed before their declaration within their scope. Attempting to do so results in a ReferenceError. This occurs because these variables are not hoisted like var declarations, and they remain in an uninitialized state from the start of their enclosing block until the line of code where they are declared.

// Example of TDZ with let
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;

// Example of TDZ with const
console.log(b); // ReferenceError: Cannot access 'b' before initialization
const b = 20;

// In contrast, variables declared with var are hoisted and initialized with undefined, allowing access before their declaration without throwing an error.
console.log(c); // undefined
var c = 30;

let x = 20;

if (true) {
  let x = 30;
  console.log(x);
}
