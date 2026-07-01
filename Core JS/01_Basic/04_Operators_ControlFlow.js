/*
=========================================
OPERATORS & CONTROL FLOW
=========================================

This file explains equality, coercion, truthy/falsy values, and basic control flow statements.
*/

// Equality and coercion
console.log(0 == false); // true
console.log(0 === false); // false
console.log("" == 0); // true
console.log("" === 0); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// Truthy and falsy values
const falsyValues = [false, 0, -0, 0n, "", null, undefined, NaN];
console.log(
  "falsy:",
  falsyValues.map((v) => Boolean(v)),
);
console.log(
  "truthy:",
  [1, "0", [], {}, () => {}].map((v) => Boolean(v)),
);

// Short-circuit operators
console.log("foo" && "bar"); // bar
console.log(null || "default"); // default
console.log(null ?? "default"); // default
console.log(0 ?? "default"); // 0

// Control flow
const score = 85;
if (score >= 90) {
  console.log("A");
} else if (score >= 75) {
  console.log("B");
} else {
  console.log("C");
}

for (let i = 0; i < 3; i++) {
  console.log("for", i);
}

let j = 0;
while (j < 2) {
  console.log("while", j);
  j++;
}

do {
  console.log("do while", j);
  j--;
} while (j > 0);

const obj = { a: 1, b: 2 };
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log("for-in", key, obj[key]);
  }
}

for (const value of [10, 20]) {
  console.log("for-of", value);
}

// https://javascript.info/try-catch

try {
  throw new Error("Example");
} catch (err) {
  console.log("caught", err.message);
} finally {
  console.log("cleanup");
}

//If an exception happens in “scheduled” code, like in setTimeout, then try...catch won’t catch it:

// try {
//   setTimeout(function () {
//     noSuchVariable; // script will die here
//   }, 1000);
// } catch (err) {
//   console.log("won't work");
// }

//Fix this

setTimeout(function () {
  try {
    noSuchVariable; // try...catch handles the error!
  } catch {
    console.log("error is caught here!");
  }
}, 1000);

// Finaally

let num = 36;

let diff, result;

function fib(n) {
  if (n < 0 || Math.trunc(n) != n) {
    throw new Error("Must not be negative, and also an integer.");
  }
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let start = Date.now();

try {
  result = fib(num);
} catch (err) {
  result = 0;
} finally {
  diff = Date.now() - start;
}

console.log(result || "error occurred");

console.log(`execution took ${diff}ms`);

/*
Explanation:
- `==` performs coercion while `===` compares type and value.
- `&&` returns the second operand when both are truthy.
- `||` returns the first truthy operand.
- `??` returns the right-hand operand only for nullish values.
- loops and conditionals are the building blocks of branching logic.
- `try/catch/finally` handles runtime exceptions and cleanup.
*/
