//###################----Closures----#####################

// A closure is created when a function is defined inside another function, allowing the inner function to access the outer function's variables even after the outer function has finished executing.

// var funcs = [];

// for (var i = 0; i < 3; i++) {
//   funcs.push(() => console.log(i));
// }

// funcs[0]();
// funcs[1]();
// funcs[2]();

//-----------------------------------

// let arr = [];
// for (var i = 0; i < 3; i++) {
//   (function (x) {
//     arr.push(function () {
//       console.log(x);
//     });
//   })(i);
// }

// arr[0](); // 3
// arr[1](); // 3
// arr[2](); // 3

// Output:
// 3
// 3
// 3
// In the above example, the functions pushed into the array form closures that capture the variable 'i' by reference. By the time these functions are called, the loop has completed and 'i' has a value of 3. Hence, all functions log 3.

//-----------------------------------

// function test() {
//   console.log(a);
//   var a = 5;
//   return function () {
//     console.log(a);
//   };
// }

// const fn2 = test();
// fn2();
// console.log(typeof a);

//-----------------------------------
// const obj = {
//   value: 10,
//   method: function () {
//     return () => {
//       console.log(this.value);
//     };
//   },
// };

// const ref = obj.method();
// ref();

//-----------------------------------

// function createFuncs() {
//   let a = 0;
//   return [
//     () => ++a,
//     () => ++a,
//     () => ++a,
//   ];
// }

// const [f1, f2, f3] = createFuncs();
// console.log(f1(), f2(), f3());

//-----------------------------------

function topest() {
  let str = "Hello";
  function outer() {
    let a = 10;
    return function inner(b) {
      console.log(str, a, b);
    };
  }
  return outer;
}

let a = 20;
const fn = topest()();
fn(12); // Output: 5 10

//-----------------------------------
