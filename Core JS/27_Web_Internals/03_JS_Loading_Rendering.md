# JavaScript Loading and Rendering

This note explains how scripts are loaded and how the browser renders the page.

## Script loading types

### 1) Normal script

```html
<script src="app.js"></script>
```

- blocks HTML parsing
- script executes immediately
- can delay page rendering

### 2) Async script

```html
<script src="app.js" async></script>
```

- downloads while HTML continues parsing
- executes as soon as ready
- may run before the document is fully parsed
- order is not guaranteed

### 3) Defer script

```html
<script src="app.js" defer></script>
```

- downloads while HTML continues parsing
- executes only after parsing is complete
- keeps order among deferred scripts
- best for DOM-dependent scripts

## Why async vs defer matters

If a script is required to access the DOM, `defer` is usually the safest choice.

If a script is independent and can run as soon as it loads, `async` is helpful.

## Rendering pipeline

```text
HTML -> DOM tree
CSS -> CSSOM
DOM + CSSOM -> Render Tree
Render Tree -> Layout
Layout -> Paint
Paint -> Composite
```

## Layout

Layout calculates element positions and sizes.

## Paint

Paint draws the pixels of visible nodes.

## Composite

Composite combines layers for efficient display.

## Reflow and repaint

### Reflow

Occurs when layout changes.

Examples:

- width changes
- font loading
- DOM insertion
- element position updates

### Repaint

Occurs when paint changes without layout changes.

Examples:

- color change
- background change

## Performance guidance

- minimize forced reflows
- batch DOM updates
- avoid expensive DOM reads and writes in loops
- prefer compositing-friendly styles
- avoid blocking the main thread with long synchronous JS

## Summary

JavaScript execution and rendering happen in the browser main thread. Loading scripts correctly (`async` vs `defer`) and writing efficient DOM code are essential for smooth, responsive pages.
