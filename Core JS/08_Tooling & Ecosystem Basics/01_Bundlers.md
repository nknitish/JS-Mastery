# Bundlers

A bundler is a build tool that takes multiple files and dependencies and turns them into a smaller set of output files that can run in the browser or in a runtime environment.

## Why do we need bundlers?

Modern JavaScript projects often contain:

- many modules
- third-party packages
- CSS and SCSS files
- images, fonts, and assets
- JSX, TypeScript, or ES modules

Browsers do not automatically understand all of these by default, especially across older environments. A bundler solves this by processing and packaging the files into something the browser can use.

## What bundlers do

Bundlers commonly do the following:

- resolve import/export relationships
- combine files into bundles
- transform syntax with loaders or transpilers
- optimize code for production
- handle asset files like CSS, images, and fonts
- split large code into smaller chunks
- support development servers and hot reloading

## Example of a simple dependency graph

```js
// index.js
import { add } from "./math.js";
console.log(add(2, 3));
```

```js
// math.js
export function add(a, b) {
  return a + b;
}
```

A bundler reads both files, resolves the dependency, and generates a bundle that can run in the browser.

## Why this matters in real apps

Without bundlers:

- imports become harder to manage
- dependencies are not resolved automatically
- assets and styles are harder to load
- code cannot be optimized for production easily

## Common bundlers

### Webpack

The classic and flexible bundler. It is highly configurable and widely used in enterprise and React projects.

### Vite

A modern tool that focuses on fast startup and developer experience. It is very popular in frontend projects.

### Rollup

Great for libraries and package bundling because it produces clean output.

### Parcel

A zero-config bundler that is simple to start with and good for beginners.

### ESBuild

Very fast and optimized for high-speed builds.

## Features of bundlers

### Tree shaking

Tree shaking removes unused exports from the final bundle. This reduces file size and improves runtime performance.

### Minification

Minification removes whitespace, renames variables, and compresses code to make production builds smaller.

### Code splitting

Large apps can load only the code they need at a given moment, improving performance.

### Source maps

Source maps help debugging by mapping bundled/minified code back to the original files.

### Asset processing

Bundlers can process CSS, images, fonts, SVGs, JSON, and other resources.

## Short interview answer

A bundler combines many JavaScript modules and assets into a few optimized files for the browser. It helps with dependency management, transpilation, minification, and performance improvements.

## Summary

Bundlers are one of the main tools in modern web development because they simplify the build process and improve performance.
