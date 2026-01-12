//---------------------------------

// console.log(b);
// let b = 10;

//---------------------------------

// console.log(a);
// var a = 5;
// function a() {}
// console.log(a);

//---------------------------------

// function test() {
//   console.log(x);
//   var x = 20;
//   console.log(x);
// }
// test();
// console.log(typeof x);

//---------------------------------

// let x = 1;
// {
//   console.log(x);
//   let x = 2;
//   console.log(x);
// }

//---------------------------------

// function outer() {
//   console.log(a);
//   let a = 10;
// }
// try {
//   outer();
// } catch (e) {
//   console.log("error in outer");
// }
// console.log("after outer");

//---------------------------------

// console.log(typeof foo);
// var foo = function () {};
// console.log(typeof foo);

//---------------------------------

// console.log(typeof bar);
// let bar = function () {};
// console.log(typeof bar);

//---------------------------------

// var n = 1;
// function demo() {
//   console.log(n);
//   if (false) {
//     var n = 2;
//   }
//   console.log(n);
// }
// demo();
// console.log(n);

//---------------------------------

// var a = 1;
// function fn() {
//   console.log(a);
//   var a = 2;
//   function inner() {
//     console.log(a);
//   }
//   inner();
// }
// fn();

//---------------------------------

// {
//   var v = 100;
//   let l = 200;
//   const c = 300;
//   console.log(v, l, c);
// }
// console.log(v);
// console.log(typeof l, typeof c);

//---------------------------------

// function foo() {
//   console.log(x);
// }
// foo();
// var x = 42;
// foo();

//---------------------------------

// function foo() {
//   console.log(y);
//   let y = 5;
// }
// try {
//   foo();
// } catch (e) {
//   console.log("caught");
// }

//---------------------------------

// console.log(a);
// let a;
// a = 10;
// console.log(a);

//---------------------------------

// console.log(b);
// const b = 5;
// console.log("end");

//---------------------------------

// function a() {
//   return b;
// }
// var b = 10;
// function test() {
//   console.log(b);
//   var b = 20;
//   console.log(a());
// }
// test();

//---------------------------------

// var x = 1;
// {
//   function x() {}
// }
// console.log(typeof x);
// console.log(x);

//---------------------------------

// console.log(m);
// {
//   function m() {}
// }
// console.log(typeof m);

//---------------------------------

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log("var loop:", i), 0);
// }
// console.log("after var loop");

//---------------------------------

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log("let loop:", i), 0);
// }
// console.log("after let loop");

//---------------------------------

// console.log("start");
// setTimeout(() => console.log("timeout 1"), 0);
// Promise.resolve().then(() => console.log("promise 1"));
// console.log("end");

//---------------------------------

// setTimeout(() => console.log("timeout"), 0);
// Promise.resolve()
//   .then(() => console.log("promise 1"))
//   .then(() => console.log("promise 2"));
// console.log("sync");

//---------------------------------

// async function run() {
//   console.log("a");
//   await null;
//   console.log("b");
// }
// console.log("start");
// run();
// console.log("end");

//---------------------------------

// var x = 10;
// async function test() {
//   console.log(x);
//   var x = 20;
//   console.log(x);
// }
// test();

//---------------------------------

// async function chain() {
//   console.log("1");
//   await Promise.resolve();
//   console.log("2");
//   await Promise.resolve();
//   console.log("3");
// }
// console.log("start");
// chain();
// console.log("end");

//---------------------------------

// function createCounter() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }
// var inc = createCounter();
// inc();
// inc();
// createCounter()();

//---------------------------------

// function create() {
//   var a = 100;
//   return function () {
//     console.log(a);
//     var a = 200;
//     console.log(a);
//   };
// }
// const fn = create();
// fn();

//---------------------------------

// console.log(x);
// var x = 1;
// (function () {
//   console.log(x);
//   var x = 2;
//   console.log(x);
// })();
// console.log(x);

//---------------------------------

// let y = 1;
// (function () {
//   console.log(y);
//   y = 2;
//   console.log(y);
// })();
// console.log(y);

//---------------------------------

// function log() {
//   console.log(z);
// }
// let z = 5;
// {
//   let z = 10;
//   log();
// }

//---------------------------------

// var p = 1;
// function outer() {
//   console.log(p);
//   function inner() {
//     console.log(p);
//     var p = 2;
//     console.log(p);
//   }
//   inner();
// }
// outer();

//---------------------------------

// console.log(typeof a);
// function a() {}
// var a = 10;
// console.log(typeof a);

//---------------------------------

// console.log(typeof b);
// var b = 10;
// function b() {}
// console.log(typeof b);

//---------------------------------

// let a = 10;
// function test() {
//   console.log(a);
// }
// {
//   let a = 20;
//   test();
// }

//---------------------------------

// let flag = false;
// setTimeout(() => {
//   flag = true;
//   console.log("timeout", flag);
// }, 0);
// while (!flag) {
//   console.log("loop");
//   break;
// }

//---------------------------------

// console.log("start");
// Promise.resolve()
//   .then(() => {
//     console.log("p1");
//     return Promise.resolve();
//   })
//   .then(() => {
//     console.log("p2");
//   });
// setTimeout(() => console.log("t1"), 0);
// console.log("end");

//---------------------------------

// async function test() {
//   console.log("inside 1");
//   await Promise.resolve();
//   console.log("inside 2");
// }
// Promise.resolve().then(() => console.log("promise before"));
// test();
// Promise.resolve().then(() => console.log("promise after"));

//---------------------------------

// console.log(a);
// var a = 10;
// {
//   console.log(a);
//   let a = 20;
//   console.log(a);
// }

//---------------------------------

// const obj = {
//   value: 1,
//   log() {
//     console.log(this.value);
//   },
// };
// const ref = obj.log;
// ref();
// obj.log();

//---------------------------------

// function weird() {
//   console.log(x);
//   if (true) {
//     function x() {}
//   }
//   console.log(typeof x);
// }
// weird();

//---------------------------------

// function delayedLog() {
//   console.log("1");
//   setTimeout(() => console.log("2"), 0);
//   Promise.resolve().then(() => console.log("3"));
//   console.log("4");
// }
// delayedLog();

//---------------------------------
