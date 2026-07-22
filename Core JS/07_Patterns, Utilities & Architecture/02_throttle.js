// How It Works
// First call → Executes immediately.
// Starts a timer for the specified delay.
// Any calls during the timer → Ignored.
// When the timer finishes → The function becomes eligible to run again.
// Next call after the timer → Executes immediately and starts a new timer.

function throttle(fn, delay) {
  let waiting = false;

  return (...args) => {
    if (waiting) return;

    fn(...args);
    waiting = true;

    setTimeout(() => {
      waiting = false;
    }, delay);
  };
}
// Example Usage:
const handleScroll = () => {
  console.log("Scrolled! Function called at most once every 1000ms.");
};

console.log("JS Loaded");

// The throttled function is the event listener
window.addEventListener("scroll", throttle(handleScroll, 2000));
