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

logTwice(promiseFunctions);
//---------------------------------------------------------------------------------

//Implemet a retry Promise

const createPromise = () =>
  new Promise((res, rej) => {
    const random = Math.random();
    random > 0.8 ? res(random) : rej("Error");
  });

const retry = async (fn, retries = 3) => {
  let lastError;
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
      console.log(`Retry ${i} Failed`);
    }
  }

  throw lastError;
};

// retry(createPromise, 5).then(console.log).catch(console.error);

//---------------------------------------------------------------------------------
