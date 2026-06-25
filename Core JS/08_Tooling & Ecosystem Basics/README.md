# Tooling & Ecosystem Basics

## What is it?

This folder introduces the basic tooling and bundler concepts used in modern JavaScript development.

## What you should know

- Bundlers like Webpack, Rollup, and Parcel combine, optimize, and manage dependencies for browser delivery.
- Transpilation allows modern syntax (ES6+) to run in older browsers.
- Module systems (ESM, CommonJS) define how code is imported and exported.

## Interview questions and answers

### What is a bundler and why do we need one?

A bundler takes small modules and packages them into one or more files for browsers. It helps manage dependencies, tree-shake unused code, and integrate assets like CSS and images.

### What is the difference between Webpack and a simple script tag?

Webpack can resolve imports, perform transformations, and optimize output. A simple script tag only loads a single file without dependency management or build-time optimizations.

### Why use source maps?

Source maps map minified/transformed code back to original source during debugging. They make stack traces readable and allow developers to step through source files.

### What is tree shaking?

Tree shaking removes unused exports from the final bundle. It works best with static ES module imports and can significantly reduce application size.

### What are the benefits of ES modules?

ES modules support static analysis, import/export syntax, and browser-native module loading. They also enable better tree shaking and dependency resolution.

## Quick revision

- Bundlers optimize assets and dependencies.
- Transpilation makes modern code browser compatible.
- Source maps improve debugging quality.
- Tree shaking removes dead code.
