/*
=========================================
OPTIONAL CHAINING AND NULLISH COALESCING
=========================================

This file demonstrates optional chaining, nullish coalescing, and their behavior.

=========================================
*/

const user = {
  profile: {
    name: "Asha",
    settings: {
      theme: "dark",
    },
  },
};

console.log(user.profile?.settings?.theme); // dark
console.log(user.profile?.preferences?.language); // undefined

const value = null;
const fallback = value ?? "default";
console.log(fallback); // default

const zero = 0;
const result = zero ?? 5;
console.log(result); // 0

const orResult = zero || 5;
console.log(orResult); // 5

/*
Explanation:
- `?.` allows safe access when a property may not exist.
- `??` only falls back on `null` or `undefined`.
- `||` also falls back on falsy values like 0 and ''.
*/
