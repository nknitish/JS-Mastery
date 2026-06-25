// Performance helper examples and guidance.

function throttle(fn, delay) {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      return fn.apply(this, args);
    }
  };
}

function debounce(fn, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), delay);
  };
}

const resizeHandler = throttle(() => console.log('resize event handled'), 250);
const inputHandler = debounce(() => console.log('input processed'), 300);

resizeHandler();
inputHandler();
