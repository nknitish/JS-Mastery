//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------

// LogTwice Function
// Write a function that takes an array of promises and calls the next one sequentially upon completion.

async function logTwice(promiseFunctions) {
  for (const promiseFunc of promiseFunctions) {
    const result = await promiseFunc();
    console.log(result);
  }
}

const promiseFunctions = [
  () => Promise.resolve("First"),
  () => new Promise((resolve) => setTimeout(() => resolve("Second"), 1000)),
  () => Promise.resolve("Third"),
];

// logTwice(promiseFunctions);

//---------------------------------------------------------------------------------

//Implemet a retry Promise

const fetchData = () => {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    random > 0.7 ? resolve(random) : reject("Error");
  });
};

const retry = async (fn, retries) => {
  while (true) {
    try {
      return await fn();
    } catch (error) {
      if (retries === 0) {
        throw error;
      }

      retries--;
    }
  }
};

retry(fetchData, 3).then(console.log).catch(console.log);

//---------------------------------------------------------------------------------
