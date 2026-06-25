/*
=========================================
OPERATORS & CONTROL FLOW
=========================================

This file explains equality, coercion, truthy/falsy values, and basic control flow statements.
*/

// Equality and coercion
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == 0); // true
console.log('' === 0); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// Truthy and falsy values
const falsyValues = [false, 0, -0, 0n, '', null, undefined, NaN];
console.log('falsy:', falsyValues.map((v) => Boolean(v)));
console.log('truthy:', [1, '0', [], {}, () => {}].map((v) => Boolean(v)));

// Short-circuit operators
console.log('foo' && 'bar'); // bar
console.log(null || 'default'); // default
console.log(null ?? 'default'); // default
console.log(0 ?? 'default'); // 0

// Control flow
const score = 85;
if (score >= 90) {
  console.log('A');
} else if (score >= 75) {
  console.log('B');
} else {
  console.log('C');
}

for (let i = 0; i < 3; i++) {
  console.log('for', i);
}

let j = 0;
while (j < 2) {
  console.log('while', j);
  j++;
}

do {
  console.log('do while', j);
  j--;
} while (j > 0);

const obj = { a: 1, b: 2 };
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log('for-in', key, obj[key]);
  }
}

for (const value of [10, 20]) {
  console.log('for-of', value);
}

try {
  throw new Error('Example');
} catch (err) {
  console.log('caught', err.message);
} finally {
  console.log('cleanup');
}

/*
Explanation:
- `==` performs coercion while `===` compares type and value.
- `&&` returns the second operand when both are truthy.
- `||` returns the first truthy operand.
- `??` returns the right-hand operand only for nullish values.
- loops and conditionals are the building blocks of branching logic.
- `try/catch/finally` handles runtime exceptions and cleanup.
*/
