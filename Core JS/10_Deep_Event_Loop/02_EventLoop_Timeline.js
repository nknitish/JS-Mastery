// Demonstrates ordering between sync, microtasks (Promises), and macrotasks (setTimeout)
console.log("A (sync)");
setTimeout(() => console.log("B (macrotask - setTimeout)"), 0);
Promise.resolve().then(() => console.log("C (microtask - promise)"));
console.log("D (sync end)");

// Expected order when run in browser or Node:
// A (sync)
// D (sync end)
// C (microtask - promise)
// B (macrotask - setTimeout)

// More complex example: nesting microtasks
Promise.resolve()
  .then(() => {
    console.log("E (microtask 1)");
    return Promise.resolve().then(() => console.log("F (nested microtask)"));
  })
  .then(() => console.log("G (microtask 2)"));

// This helps visualize microtask queue draining before macrotasks.
