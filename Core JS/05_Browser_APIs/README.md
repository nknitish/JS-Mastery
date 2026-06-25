# Browser APIs & Fetch

## What is it?
This folder covers browser APIs that every frontend developer uses: DOM, events, fetch, storage, and timers.

## Why it matters
Frontend applications interact with the browser environment, so you must know how to query and manipulate the DOM, handle network requests, and use browser storage.

## Topics covered
- fetch API and AbortController
- DOM selection and manipulation
- event handling and delegation
- localStorage/sessionStorage
- timers and requestAnimationFrame
- URL and FormData basics

## Interview questions and answers

### How do you make a network request with `fetch`?
`fetch` is called with a URL and returns a promise that resolves to a `Response`. You can check `response.ok`, then parse the body with `response.json()` or `response.text()`.

Example answer:
"Use `fetch(url).then(res => { if (!res.ok) throw new Error(res.statusText); return res.json(); })` to request JSON data and handle HTTP errors."

### How do you cancel a request using `AbortController`?
Create an `AbortController`, pass `controller.signal` to `fetch`, and call `controller.abort()` when cancellation is needed. `fetch` rejects with an `AbortError`.

### What is event delegation and why is it useful?
Event delegation attaches a single listener to a parent element and handles events for child elements via event bubbling. It is useful for dynamic content and reduces the number of event listeners.

### How do you use `localStorage` safely?
Store only small, serializable strings in `localStorage`. Always handle parsing errors from `JSON.parse` and avoid storing sensitive data because it is accessible from any script running on the page.

### Why use `requestAnimationFrame` instead of `setTimeout` for animations?
`requestAnimationFrame` synchronizes rendering with the browser's refresh rate, delivering smoother animations and avoiding unnecessary frames when the tab is not visible.

## Quick notes
- `fetch` returns a promise and rejects only on network failure.
- parse JSON using `response.json()`.
- DOM queries use `querySelector` and `querySelectorAll`.
- prefer passive listeners for scroll and touch.
