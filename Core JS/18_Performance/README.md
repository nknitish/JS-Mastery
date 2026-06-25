# Performance

## What is it?
Performance covers runtime optimizations, browser rendering, and techniques for making JavaScript fast and responsive.

## Why it matters
Senior frontend engineers must know how to avoid common performance pitfalls and optimize UI responsiveness under real user load.

## Topics covered
- debounce and throttle
- memoization
- lazy loading and virtualization
- tree shaking and code splitting
- Performance API and metrics

## Interview questions and answers

### What is debounce and when should you use it?
Debounce delays execution until a burst of changes stops. Use it for input events, resize, and scroll handlers to reduce excessive work.

### What is throttle and when should you use it?
Throttle limits the rate of function execution to a fixed interval. Use it for periodic updates such as analytics events or scroll position tracking.

### What is tree shaking?
Tree shaking removes unused code from bundles during the build process. It relies on static analysis of ES module imports and exports.

### When do you use `requestIdleCallback`?
Use `requestIdleCallback` for non-urgent background tasks when the browser is idle, such as prefetching data or low-priority cleanup.

## Quick revision
- avoid expensive work inside hot loops.
- use memoization for expensive pure computations.
- use virtualization for long lists.
- measure with `performance.now()` and `PerformanceObserver`.
