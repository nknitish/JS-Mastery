/*
=========================================
BETTER REQUEST WRAPPER
=========================================

This file shows a practical Promise-based request helper.
It supports:
- canceling a request
- retrying failed requests
- delay between retries
- clean error handling
*/

function createRequest({
  url,
  method = "GET",
  body = null,
  timeout = 5000,
  retries = 2,
  retryDelay = 1000,
  signal = null,
}) {
  return new Promise((resolve, reject) => {
    const controller = signal || new AbortController();
    const timer = setTimeout(() => {
      controller.abort();
      reject(new Error(`Request timed out for ${url}`));
    }, timeout);

    const attempt = (count) => {
      fetch(url, {
        method,
        body,
        signal: controller.signal,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(async (response) => {
          if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
          }

          const data = await response.json();
          clearTimeout(timer);
          resolve(data);
        })
        .catch((error) => {
          if (controller.signal.aborted) {
            clearTimeout(timer);
            reject(error);
            return;
          }

          if (count < retries) {
            console.log(`Retrying ${url} (${count + 1}/${retries})...`);
            setTimeout(() => attempt(count + 1), retryDelay);
            return;
          }

          clearTimeout(timer);
          reject(error);
        });
    };

    attempt(0);
  });
}

// Example usage
const controller = new AbortController();

const request = createRequest({
  url: "https://jsonplaceholder.typicode.com/todos/1",
  method: "GET",
  retries: 2,
  retryDelay: 1000,
  signal: controller.signal,
});

request
  .then((data) => {
    console.log("Request success:", data);
  })
  .catch((error) => {
    console.log("Request failed:", error.message);
  });

// Cancel after 200ms
setTimeout(() => {
  controller.abort();
  console.log("Request cancelled");
}, 200);

/*
How this works:
- It creates a Promise around fetch
- It times out if request doesn't finish in time
- It retries a few times with delay
- It supports cancellation via AbortController
- It returns a single clean API for request management
*/
