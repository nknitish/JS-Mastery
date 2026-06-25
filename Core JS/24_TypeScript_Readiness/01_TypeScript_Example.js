// TypeScript readiness examples using JSDoc style hints and design patterns.

/**
 * @typedef {{ id: number; name: string; active: boolean }} User
 */

/**
 * @type {User}
 */
const user = {
  id: 1,
  name: 'Jane Doe',
  active: true,
};

function toggleUser(user) {
  return {
    ...user,
    active: !user.active,
  };
}

const updatedUser = toggleUser(user);
console.log('Updated user', updatedUser);

// Generic helper example in TypeScript-style comments
/**
 * @template T
 * @param {T[]} items
 * @returns {T[]}
 */
function cloneArray(items) {
  return items.slice();
}

const numbers = cloneArray([1, 2, 3]);
console.log(numbers);

// Notes:
// - TypeScript introduces interfaces and types to describe shapes.
// - Structural typing means objects are compatible by their fields.
// - Generics let you write code that works across multiple types.
