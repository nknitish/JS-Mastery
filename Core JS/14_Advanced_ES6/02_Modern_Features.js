// Advanced ES6+ features in code examples.

const user = {
  name: 'Ava',
  address: {
    city: 'Paris',
    zip: '75000'
  }
};

const city = user?.address?.city ?? 'Unknown';
console.log('Optional chaining result:', city);

const dynamicImportExample = async () => {
  if (Math.random() > 0.5) {
    const module = await import('./02_Modern_Features.js');
    console.log('Imported module', module);
  } else {
    console.log('Skipping dynamic import');
  }
};

class Counter {
  #count = 0;
  increment() {
    this.#count += 1;
    return this.#count;
  }
}

const counter = new Counter();
console.log('Private field access via method:', counter.increment());

// Notes:
// - Optional chaining avoids TypeErrors when deep objects are absent.
// - Nullish coalescing distinguishes `null`/`undefined` from falsy values.
// - Dynamic import is useful for lazy-loading modules.
// - Private fields are syntax-level encapsulation for class state.
