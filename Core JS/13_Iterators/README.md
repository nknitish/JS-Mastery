# Iterators & Generators

## What is it?
Iterators provide a standard way to traverse a collection, and generators are functions that can pause and resume execution.

## Why it matters
This helps you build custom iterable objects and lazy data pipelines.

## Topics covered
- iterable protocol
- iterator protocol
- custom iterators
- generators and `yield`

## Interview questions and answers

### What is the difference between iterable and iterator?
An iterable has a `[Symbol.iterator]` method that returns an iterator. An iterator has a `next()` method that returns `{ value, done }`.

### How does `for...of` use the iterator protocol?
`for...of` calls the iterable's `[Symbol.iterator]()` method and repeatedly calls `next()` until `done` becomes true.

### Write a custom iterator for a range of numbers.
Create an object with `[Symbol.iterator]()` returning an iterator whose `next()` returns each number in range and `done` when finished.

### Explain how generators pause and resume execution.
Generators pause at each `yield` and resume from that point the next time `next()` is called.

### When should you use generator functions?
Use generators for lazy sequences, streaming data, and async control flows when you want to manage state across multiple yields.

## Quick notes
- iterable objects implement `[Symbol.iterator]()`.
- iterator objects implement `next()` returning `{ value, done }`.
- generators are syntactic sugar around iterator objects.
