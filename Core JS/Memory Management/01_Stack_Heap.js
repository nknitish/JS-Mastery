/*
=========================================
STACK VS HEAP
=========================================

JavaScript divides memory into two main regions:
- Stack: stores execution context frames, primitives, and references to heap objects.
- Heap: stores objects, arrays, functions, and closures with dynamic size.

Understanding stack vs heap helps explain performance, scope, and lifetime of values.

=========================================
*/

function stackVsHeapExample() {
  const primitive = 42;              // stored directly in the stack frame
  const reference = { name: 'JS' };  // object stored in heap, reference stored in stack

  function inner() {
    const localString = 'hello';     // new primitive on stack
    console.log(primitive);          // access stack value
    console.log(reference.name);     // access heap object through reference
    console.log(localString);        // access stack value
  }

  inner();
}

stackVsHeapExample();

// Output
// 42
// JS
// hello

/*
Explanation:
- `primitive` lives in the stack frame of `stackVsHeapExample`.
- `reference` is a stack pointer to a heap object.
- The heap can store dynamically sized objects; the stack cannot.
- When `stackVsHeapExample` returns, its stack frame is removed, and local primitives are gone.
*/
