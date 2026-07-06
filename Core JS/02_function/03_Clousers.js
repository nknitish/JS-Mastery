//###################----Closures----#####################

// javascript.info/closure

// A closure is created when a function is defined inside another function, allowing the inner function to access the outer function's variables even after the outer function has finished executing.

// var funcs = [];

// for (var i = 0; i < 3; i++) {
//   funcs.push(() => console.log(i));
// }

// funcs[0]();
// funcs[1]();
// funcs[2]();

// Output:
// 3
// 3
// 3
// In the above example, the functions pushed into the array form closures that capture the variable 'i' by reference. By the time these functions are called, the loop has completed and 'i' has a value of 3. Hence, all functions log 3.

//-----------------------------------

// Fix with war

// let arr = [];
// for (var i = 0; i < 3; i++) {
//   (function (x) {
//     arr.push(() => console.log(x));
//   })(i);
// }

// arr[0]();
// arr[1]();
// arr[2]();

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
//   return [() => ++a, () => ++a, () => ++a];
// }

// const [f1, f2, f3] = createFuncs();
// console.log(f1(), f2(), f3());

//-----------------------------------

// function topest() {
//   let str = "Hello";
//   function outer() {
//     let a = 10;
//     return function inner(b) {
//       console.log(str, a, b);
//     };
//   }
//   return outer;
// }

// let a = 20;
// const fn = topest()();
// fn(12);

//-----------------------------------
// Filter inBetween

// let arr = [1, 2, 3, 4, 5, 6, 7];

// const inBetween = (a, b) => {
//   return (x) => {
//     return x >= a && x <= b;
//   };
// };

// const inArray = (arr) => {
//   return (n) => {
//     return arr.includes(n);
//   };
// };

// console.log(arr.filter(inBetween(3, 6)));
// console.log(arr.filter(inArray([1, 2, 10])));

//-----------------------------------

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];

const byField = (filed) => {
  return (a, b) => {
    return a[filed] > b[filed] ? 1 : -1;
  };
};

// console.log(users.sort(byField("name")));
// console.log(users.sort(byField("age")));

//-----------------------------------
