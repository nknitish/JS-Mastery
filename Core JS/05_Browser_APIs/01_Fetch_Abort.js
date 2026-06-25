/*
=========================================
FETCH + ABORTCONTROLLER
=========================================

This file demonstrates performing network requests with `fetch` and canceling them with AbortController.
*/

const controller = new AbortController();
const signal = controller.signal;

async function fetchJson(url) {
  try {
    const response = await fetch(url, { signal });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const data = await response.json();
    console.log('data', data);
    return data;
  } catch (error) {
    if (error.name === 'AbortError') {
      console.log('Request aborted');
      return;
    }
    console.log('Fetch error', error.message);
    throw error;
  }
}

fetchJson('https://jsonplaceholder.typicode.com/todos/1');

setTimeout(() => {
  controller.abort();
}, 1000);

/*
Explanation:
- `fetch` returns a promise that resolves when the response is available.
- `AbortController` gives a signal that can cancel the request.
- If aborted, fetch throws a `DOMException` with `name === 'AbortError'`.
*/