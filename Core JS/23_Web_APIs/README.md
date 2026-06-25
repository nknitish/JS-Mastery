# Web APIs

## What is it?
This folder covers browser APIs used for advanced frontend features such as observers, workers, and browser communication.

## Why it matters
Senior frontend engineers use advanced Web APIs to optimize performance, build offline experiences, and integrate browser capabilities.

## Topics covered
- IntersectionObserver
- ResizeObserver
- MutationObserver
- History API
- Clipboard API
- BroadcastChannel
- Web Workers
- Service Workers

## Interview questions and answers

### Why use IntersectionObserver?
`IntersectionObserver` lets you detect when an element enters or leaves the viewport efficiently, without polling or scroll event handlers.

### What is a MutationObserver?
`MutationObserver` watches DOM changes and calls a callback when nodes are added, removed, or modified. It is useful for reacting to dynamic content updates.

### What are Web Workers?
Web Workers run JavaScript in a separate thread, allowing expensive computations without blocking the main UI thread.

### What is a Service Worker?
A Service Worker is a background script that intercepts network requests, manages caching, and enables offline-first experiences.

## Quick revision
- use `requestAnimationFrame` for rendering work.
- use observers instead of constantly querying the DOM.
- use workers for CPU-heavy tasks.
- service workers improve performance and offline reliability.
