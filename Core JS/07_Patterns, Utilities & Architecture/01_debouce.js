// const debounce = (callback, delay) => {
//   let timeoutId = null; // This variable is maintained using closure

//   return (...args) => {
//     // Clear any existing timeout whenever the function is called again
//     if (timeoutId) {
//       clearTimeout(timeoutId);
//     }

//     // Set a new timeout to execute the callback after the delay
//     timeoutId = setTimeout(() => {
//       callback(...args); // Use spread operator to pass arguments
//     }, delay);
//   };
// };

const debounce = (fn, wait = 0, immediate = false) => {
  let timer;
  function debounced(...args) {
    const callNow = immediate && !timer;
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (!immediate) fn.apply(this, args);
      timer = null;
    }, wait);
    if (callNow) fn.apply(this, args);
  }
  debounced.cancel = () => clearTimeout(timer);
  return debounced;
};

const printName = (name = "") => {
  console.log(`My name is ${name}`);
};

const debouncedPrint = debounce(printName, 1000);
const debouncedPrintImmidate = debounce(printName, 1000, true);

debouncedPrint("Nk 1");
debouncedPrint("Nk 2");
debouncedPrint("Nk 3");
debouncedPrintImmidate("Nk 4");
debouncedPrint("Nk 5");
debouncedPrintImmidate("Nk 6");

setTimeout(() => debouncedPrint("Nk 7"), 600);
setTimeout(() => debouncedPrint("Nk 8"), 100);
