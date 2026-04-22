//Lexical Environment / Scope Chain

function printData() {
  function printb() {
    console.log("inside print b", b);
  }
  printb();
  console.log("inside print", b);
}

var b = 10;
printData();

// Output:
// inside print b 10
// inside print 10

// Lexical environment is the local memory along with the lexical environment of its parent. This forms a scope chain.

// In the above example, when printb() is called, it first looks for variable 'b' in its own local memory. Not finding it there, it looks into the lexical environment of its parent function 'print'. Again, not finding it there, it looks into the global lexical environment where it finds 'b' with value 10. Hence, it prints 10.

// Similarly, when print() is called, it looks for 'b' in its own local memory. Not finding it there, it looks into the global lexical environment where it finds 'b' with value 10. Hence, it prints 10.

// This chain of looking up variables in the current lexical environment and then moving up to the parent lexical environment continues until the variable is found or the global environment is reached.

//Block Scope
{
  let a = 20;
  const c = 30;
  var d = 40;
  console.log("inside block", a, c, d);
}
console.log("outside block", d); // d is accessible here because var is function-scoped, not block-scoped
