//---------------------------------

// let x = 1;
// function test() {
//   console.log(x);
//   x = 2;
// }
// test();
// console.log(x);

//---------------------------------

// function outer() {
//   let a = 10;
//   return function () {
//     console.log(a);
//   };
// }
// const fn = outer();
// a = 20;
// fn();

//---------------------------------

// function counter() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }
// const c1 = counter();
// const c2 = counter();
// c1();
// c1();
// c2();
// c1();

//---------------------------------

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 0);
// }

//---------------------------------

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 0);
// }

//---------------------------------

// function outer() {
//   var a = 1;
//   return function inner() {
//     console.log(a);
//     a++;
//   };
// }
// const f = outer();
// f();
// outer()();
// f();

//---------------------------------

// var funcs = [];
// for (var i = 0; i < 3; i++) {
//   funcs.push(() => console.log(i));
// }
// funcs[0]();
// funcs[1]();
// funcs[2]();

//---------------------------------

// var funcs = [];
// for (let i = 0; i < 3; i++) {
//   funcs.push(() => console.log(i));
// }
// funcs[0]();
// funcs[1]();
// funcs[2]();

//---------------------------------

// function makeAdder(x) {
//   return function (y) {
//     console.log(x + y);
//   };
// }
// const add2 = makeAdder(2);
// const add5 = makeAdder(5);
// add2(10);
// add5(10);

//---------------------------------

// let value = 100;
// function show() {
//   console.log(value);
// }
// function change() {
//   let value = 200;
//   show();
// }
// change();

//---------------------------------

// function foo() {
//   let secret = "hidden";
//   return {
//     get: () => console.log(secret),
//     set: (v) => (secret = v),
//   };
// }
// const obj = foo();
// obj.get();
// obj.set("changed");
// obj.get();

//---------------------------------

// let arr = [];
// for (var i = 0; i < 3; i++) {
//   arr[i] = function () {
//     console.log(i);
//   };
// }
// arr[0]();
// arr[1]();
// arr[2]();

//---------------------------------

// function weird() {
//   var count = 0;
//   return () => {
//     console.log(count);
//     count = 10;
//   };
// }
// const w = weird();
// w();
// w();

//---------------------------------

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

//---------------------------------

// let name = "outer";
// function parent() {
//   let name = "inner";
//   return function () {
//     console.log(name);
//   };
// }
// const out = parent();
// console.log(name);
// out();

//---------------------------------

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

//---------------------------------

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

//---------------------------------

// const counters = [];
// function make() {
//   let x = 0;
//   return () => console.log(++x);
// }
// counters.push(make());
// counters.push(make());
// counters[0]();
// counters[1]();
// counters[0]();

//---------------------------------

// function run() {
//   let secret = 1;
//   return function () {
//     console.log(secret);
//     secret++;
//   };
// }
// const exec = run();
// [1, 2, 3].forEach(() => exec());

//---------------------------------

// let a = 1;
// function one() {
//   let a = 2;
//   return function () {
//     console.log(a);
//   };
// }
// const fn3 = one();
// a = 3;
// fn3();

//---------------------------------

// function timer() {
//   let x = 0;
//   setTimeout(() => console.log(x), 100);
//   x = 5;
// }
// timer();

//---------------------------------

// function tricky() {
//   let num = 0;
//   return function () {
//     num++;
//     setTimeout(() => console.log(num), 0);
//   };
// }
// const t = tricky();
// t();
// t();

//---------------------------------

// function repeated() {
//   let score = 1;
//   return () => console.log(++score);
// }
// const s = repeated();
// s();
// s();
// repeated()();
// s();

//---------------------------------

// let global = 10;
// function wrap() {
//   console.log(global);
//   global = 20;
//   return () => console.log(global);
// }
// const w2 = wrap();
// w2();
// console.log(global);

//---------------------------------

// function factory() {
//   let list = [];
//   return function (item) {
//     list.push(item);
//     console.log(list);
//   };
// }
// const addItem = factory();
// addItem(1);
// addItem(2);
// factory()(3);

//---------------------------------

// function multimaker() {
//   let n = 1;
//   return [
//     () => n += 5,
//     () => n *= 2,
//   ];
// }
// const [inc, dbl] = multimaker();
// console.log(inc());
// console.log(dbl());
// console.log(inc());

//---------------------------------

// function deep() {
//   let x = 1;
//   return function () {
//     let y = 2;
//     return function () {
//       console.log(x + y);
//     };
//   };
// }
// const d = deep()();
// d();

//---------------------------------

// let count = 1;
// const logger = () => console.log(count);
// (function () {
//   let count = 5;
//   logger();
// })();

//---------------------------------

// function build() {
//   let state = 0;
//   return {
//     inc: () => ++state,
//     show: () => console.log(state),
//   };
// }
// const obj2 = build();
// obj2.inc();
// obj2.show();
// build().show();

//---------------------------------

// function puzzle() {
//   let a = 1;
//   return function () {
//     console.log(a);
//     a += 2;
//   };
// }
// const p = puzzle();
// p();
// p();
// p();

//---------------------------------

// var num = 5;
// function outerX() {
//   return function () {
//     console.log(num);
//   };
// }
// num = 10;
// const print = outerX();
// num = 15;
// print();

//---------------------------------

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
// fn(12); // Output: 5 10

//-----------------------------------

// const a = 1;
// function b() {
//   a = 10;
//   return a;
//   function a() {}
// }

// console.log(b()); // 10
// console.log(a); //1

//-----------------------------------

// (() => {
//   console.log("1");

//   setTimeout(() => {
//     console.log("2");
//   }, 2);

//   setTimeout(() => {
//     console.log("3");
//   }, 1);

//   console.log("4");

//   const p1 = new Promise((res, rej) => {
//     res();
//   });

//   setTimeout(() => {
//     console.log("5");
//   }, 0);

//   p1.then(() => {
//     console.log("6");
//   });

//   console.log("7");
// })();

//1 4 7 6 5 3 2
//-----------------------------------
