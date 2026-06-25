/*
=========================================
DEBOUNCE AND THROTTLE
=========================================

This file compares debounce and throttle implementations with examples.
*/

function debounce(fn, wait = 300) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(context, args), wait);
  };
}

function throttle(fn, limit = 300) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

const logDebounce = debounce(() => console.log("debounced"), 200);
const logThrottle = throttle(() => console.log("throttled"), 200);

logDebounce();
logDebounce();
logDebounce();

logThrottle();
logThrottle();
logThrottle();

/*
Explanation:
- debounce waits until the event stream stops before invoking the callback.
- throttle allows the callback at most once per interval.
- both techniques improve performance for frequent events.
*/
