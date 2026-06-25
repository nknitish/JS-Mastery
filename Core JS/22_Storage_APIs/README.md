# Storage APIs

## What is it?

This folder covers browser storage mechanisms for persisting data locally in web applications.

## Why it matters

Choosing the right storage API is essential for performance, security, and data persistence across sessions.

## Topics covered

- cookies
- localStorage
- sessionStorage
- IndexedDB
- Cache API

## Interview questions and answers

### When should you use cookies?

Use cookies for small pieces of data that need to be sent with every HTTP request, such as session identifiers. Avoid storing sensitive data in cookies unless they are secure and HttpOnly.

### What is localStorage used for?

`localStorage` stores string data persistently per origin. It is good for user preferences and cached values, but not for sensitive data.

### When should you use sessionStorage?

`sessionStorage` stores data for the duration of a single tab session. It is useful for temporary state that should not persist after the tab is closed.

### What is IndexedDB?

IndexedDB is a browser database for large structured data. It supports transactions, indexes, and asynchronous operations.

### What is the Cache API?

The Cache API stores request/response pairs in the browser, typically for offline support and resource caching in service workers.

## Quick revision

- cookies are sent with each HTTP request and can be scoped to domains/paths.
- localStorage persists until explicitly cleared.
- sessionStorage clears when tab or window closes.
- IndexedDB is the best choice for large, structured client-side storage.
- Cache API is used with service workers for offline assets.
