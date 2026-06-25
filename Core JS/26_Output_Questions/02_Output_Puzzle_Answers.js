// Output question answers for the puzzles in 01_Output_Puzzles.js

// 1: typeof hoistedVar -> 'undefined', typeof hoistedLet -> 'undefined' or ReferenceError? 
// Actually let is in TDZ until initialization, so this will throw ReferenceError for hoistedLet.

// 2: prints 3, 3, 3 because var i is function-scoped and the timeouts run after the loop.

// 3: obj.getValue() -> 10, detached() -> undefined because `this` is lost in the detached reference.

// 4: sync, promise resolved, timeout

// 5: Hello Alice, true

// 6: default fallback

// 7: 1, 2, 3

// 8: rejected

// Notes:
// - `let` and `const` are not hoisted in an initialized state, causing TDZ.
// - Detached method references lose implicit receiver binding.
// - Promise microtasks execute before macrotask callbacks.
