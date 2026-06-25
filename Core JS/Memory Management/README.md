# Memory Management

## What is it?
Memory Management explains how JavaScript allocates and releases memory while a program runs.

## Why it matters
Without memory management, applications would consume memory indefinitely and eventually crash.

## Topics covered
- Stack vs Heap
- Garbage Collection
- Mark and Sweep
- Memory leak causes
- Closures, event listeners, timers, detached DOM nodes

## Interview questions and answers

### What is the difference between stack and heap?
The stack stores function call frames and local primitive values with LIFO semantics; the heap stores objects and dynamically allocated values referenced from anywhere.

### Explain how JavaScript garbage collection works.
Most engines use reachability: starting from root references (globals, stack), reachable objects are kept; unreachable objects are reclaimed by the collector.

### What is mark-and-sweep?
Mark-and-sweep is a GC algorithm that marks reachable objects and then sweeps (frees) the unmarked, unreachable objects.

### Why can closures create memory leaks?
Closures retain references to outer variables, which can keep objects reachable longer than intended if references aren't released.

### How do detached DOM nodes cause leaks?
If JavaScript holds references to DOM nodes removed from the document (detached), those nodes remain reachable and cannot be garbage-collected.

## Quick notes
- Stack stores function call frames and primitives.
- Heap stores objects, arrays, functions and closures.
- GC marks reachable objects from roots and reclaims unreachable heap entries.
- Leak triggers include global references, forgotten timers, dangling listeners, and retained closures.
