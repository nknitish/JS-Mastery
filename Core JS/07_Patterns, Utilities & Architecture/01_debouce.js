const debounce = (callback, delay) => {
  let timeoutId = null; // This variable is maintained using closure

  return (...args) => {
    // Clear any existing timeout whenever the function is called again
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Set a new timeout to execute the callback after the delay
    timeoutId = setTimeout(() => {
      callback(...args); // Use spread operator to pass arguments
    }, delay);
  };
};

const search = (text) =>
  console.log(`Seaching for ${text} Date = ${new Date()}`);

const debounceSeach = debounce(search, 1000);

debounceSeach("Re");
debounceSeach("Rea");
debounceSeach("Reac");
debounceSeach("React");
debounceSeach("React is Love");
