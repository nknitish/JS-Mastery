# Serialization

## What is it?
Serialization converts JavaScript values into a format that can be stored or transmitted, then reconstructed later.

## Why it matters
Serialization is used for network communication, persistence, caching, and cross-window messaging.

## Topics covered
- JSON serialization and parsing
- structuredClone()
- deep cloning
- handling circular references

## Interview questions and answers

### When should you use JSON serialization?
Use JSON for simple plain-data objects that contain strings, numbers, booleans, arrays, and nested objects. It is not suitable for functions, symbols, or non-serializable types.

### What is `structuredClone`?
`structuredClone` creates a deep copy of a value, including nested objects, arrays, Maps, Sets, Date, RegExp, and more. It is safer than `JSON.parse(JSON.stringify(...))` for complex data.

### How do you handle circular references during cloning?
You need a custom clone algorithm that tracks visited objects and reuses references instead of recursing infinitely. JSON serialization cannot handle circular structures.

## Quick revision
- `JSON.stringify` converts data to a string.
- `JSON.parse` reconstructs plain objects from JSON.
- `structuredClone` supports richer types and preserves object graphs.
- circular references require specialized cloning logic.
