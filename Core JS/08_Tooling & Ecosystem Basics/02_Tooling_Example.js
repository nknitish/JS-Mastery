// This file demonstrates the kinds of JavaScript code that modern bundlers process.
// Bundlers analyze dependencies, transpile syntax, and emit optimized bundles.

export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

export function calculateTotal(items) {
  return items.reduce(
    (sum, item) => add(sum, multiply(item.price, item.quantity)),
    0,
  );
}

// Example usage:
const order = [
  { price: 12.99, quantity: 2 },
  { price: 5.5, quantity: 3 },
];

console.log("order total =", calculateTotal(order));

// Notes:
// - A bundler can take this module and its imports and bundle them into a single file.
// - Transpilers can convert `export`/`import` syntax to a format supported by older browsers.
// - Source maps allow debugging the original source code even after bundling.
