/*
=========================================
MEMORY LEAK CAUSES
=========================================

This file demonstrates common memory leak sources in JavaScript.

Topics:
- global variables
- closures retaining large objects
- event listener leaks
- timer leaks
- detached DOM nodes

=========================================
*/

// 1. Global variable leak
function registerGlobal() {
  // This becomes a global property when not declared with const/let/var.
  leakyVar = { data: new Array(100000).fill('x') };
}
registerGlobal();

// `leakyVar` remains reachable from the global object and cannot be garbage-collected.

// 2. Closure retaining a large object
function createCache() {
  const cache = { items: new Array(100000).fill('cached') };
  return function getFromCache() {
    return cache.items.length;
  };
}
const cacheAccessor = createCache();
console.log(cacheAccessor());

// The `cache` object remains reachable as long as the closure exists.

// 3. Event listener leak
const button = document && document.createElement ? document.createElement('button') : null;
if (button) {
  button.addEventListener('click', function handler() {
    console.log('clicked');
  });
  // If button is removed from DOM but listener remains attached, memory may leak.
}

// 4. Timer leak
const intervalId = setInterval(() => {
  console.log('tick');
}, 1000);

// Without clearInterval(intervalId), the callback remains reachable forever.

// 5. Detached DOM node
let container = document && document.createElement ? document.createElement('div') : null;
if (container) {
  container.innerHTML = '<p>detached</p>';
  const child = container.querySelector('p');
  document && document.body && document.body.appendChild(container);
  document.body.removeChild(container);
  // If `container` is retained by JavaScript while detached from DOM, it can leak.
}

/*
Explanation:
- Global variables are always reachable from the global object.
- Closures keep captured values alive after the outer function returns.
- Event listeners and timers create hidden references into JS memory.
- Detached DOM nodes are still held by JS references if not released.
*/
