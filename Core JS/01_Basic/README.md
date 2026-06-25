# JavaScript Fundamentals

## What is JavaScript?
JavaScript is a dynamic, interpreted programming language used to build interactive web applications. It runs in the browser and on the server via Node.js. It is a single-threaded language with an event loop that enables asynchronous programming despite its synchronous execution model.

### Ready-to-speak answer
"JavaScript is the language of the web. It lets browsers manipulate the DOM, handle user interactions, and perform asynchronous operations like network requests. It is single-threaded, event-driven, and capable of both functional and object-oriented programming."

## What is it?
This folder covers the core JavaScript execution model, data types, operators, control flow, and basic error handling.

## Why it matters
All advanced JavaScript topics build on these fundamentals. Strong mastery here prevents common bugs and leads to better architecture decisions.

## Topics covered
- JavaScript execution model
- variable declaration and hoisting
- primitive vs reference values
- type coercion and equality
- control flow statements
- error handling with try/catch

## Interview questions and answers

### What is the difference between `var`, `let`, and `const`?
- `var` is function-scoped and hoisted with an initial value of `undefined`.
- `let` and `const` are block-scoped and cannot be accessed before declaration due to the TDZ.
- `const` creates a constant binding, meaning the variable cannot be reassigned, but the object it points to can still mutate.

### Explain the Temporal Dead Zone.
The Temporal Dead Zone is the time between entering a block scope and the actual declaration of a `let` or `const` variable. During this time, the variable exists but is uninitialized, and accessing it throws a `ReferenceError`.

### How does `==` handle type coercion?
`==` compares values after converting them to a common type. For example, `0 == false` is true because `false` becomes `0`, and `'' == 0` is true because both become number zero. This can lead to surprising results, which is why `===` is generally preferred.

### When should you use `try/catch`?
Use `try/catch` when executing code that may throw exceptions, such as parsing JSON, working with external APIs, or running dynamic code. Put cleanup logic in `finally` when you need code to run whether an error occurs or not.

### How does the call stack work?
The call stack tracks active function executions in a last-in, first-out order. When a function is called, a new frame is pushed. When it returns, the frame is popped. If the stack grows too deep, a stack overflow can occur.

## Quick revision
- primitives are copied by value; objects are copied by reference.
- `null` is a value, `undefined` means uninitialized.
- `===` compares type and value; `==` coerces before comparing.
- `&&` and `||` short-circuit and return values, not booleans.
- loops and branches control program flow.
