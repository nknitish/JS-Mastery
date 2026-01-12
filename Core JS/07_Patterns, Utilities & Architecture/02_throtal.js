function throttle(func, delay) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, delay);
    }
  };
}

// Example Usage:
const handleScroll = () => {
  console.log("Scrolled! Function called at most once every 1000ms.");
};

// The throttled function is the event listener
window.addEventListener("scroll", throttle(handleScroll, 1000));
