// module-a.mjs — demonstrates named and default exports

// named exports
export const PI = 3.14159;
export function add(a, b) {
  return a + b;
}

// default export
export default function greet(name) {
  return `Hello ${name}`;
}
