//------------------------------------------------- EASY -------------------------
//-----------------

// console.log(a);
// var a = 10;

//-----------------

// console.log(a);
// let a = 10;

//-----------------

// function test() {
//   console.log(a);
//   var a = 5;
//   console.log(a);
// }
// test();

//-----------------

// function outer() {
//   let x = 1;
//   return function () {
//     console.log(x);
//     x++;
//   };
// }
// const fn = outer();
// fn();
// fn();

//-----------------

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 0);
// }

//-----------------

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 0);
// }

//-----------------

// console.log(typeof a);
// function a(){}

//-----------------

// console.log("start");
// setTimeout(() => console.log("timeout"), 0);
// console.log("end");

//-----------------

// console.log("A");
// Promise.resolve().then(() => console.log("B"));
// console.log("C");

//-----------------

// let a = 1;
// (function () {
//   console.log(a);
//   a = 2;
//   console.log(a);
// })();
// console.log(a);

//-----------------

// let count = 0;
// const inc = () => count++;
// inc();
// console.log(count);

//-----------------

// function foo() {
//   console.log(this);
// }
// foo();

//-----------------

// console.log(1);
// Promise.resolve().then(() => console.log(2));
// console.log(3);

//-----------------

// async function test() {
//   return 10;
// }
// test().then(console.log);

//-----------------

// console.log("X");
// new Promise((res)=>res("Y")).then(console.log);
// console.log("Z");

//-----------------

// function test() {
//   console.log(a);
//   var a = 20;
// }
// test();

//-----------------

// let x = 10;
// function fn() {
//   console.log(x);
//   x = 20;
// }
// fn();
// console.log(x);

//-----------------

// function a() {
//   console.log("a");
// }
// var a;
// a();

//-----------------

// console.log(a);
// var a = function () {
//   console.log("func");
// };
// console.log(typeof a);

//-----------------

// const obj = {val: 1, inc(){this.val++;}}
// const inc = obj.inc;
// inc();
// console.log(obj.val);

//-----------------

// async function go(){
//   console.log("A");
//   await null;
//   console.log("B");
// }
// go();
// console.log("C");

//-----------------

// function makeAdder(x) {
//   return function (y) {
//     console.log(x + y);
//   };
// }
// const add5 = makeAdder(5);
// add5(10);

//-----------------

// let a = 1;
// {
//   let a = 2;
//   console.log(a);
// }
// console.log(a);

//-----------------

// let str = "hello";
// console.log(str[1]);

//-----------------

// var a = 1;
// let b = 2;
// {
//   var a = 3;
//   let b = 4;
//   console.log(a, b);
// }
// console.log(a, b);

//-----------------

// console.log([1,2] == [1,2]);

//-----------------

// let obj = {name:"A"};
// let obj2 = obj;
// obj2.name = "B";
// console.log(obj.name);

//-----------------

// console.log(+true, +false);

//-----------------

// console.log(typeof null);

//-----------------

// console.log([] + []);

//-----------------

// console.log([] == ![]);

//-----------------

// console.log("5" - 2);

//-----------------

// console.log("5" + 2);

//-----------------

// console.log("5" * "2");

//-----------------

// var a;
// console.log(a);

//-----------------

// function aa() {}
// console.log(typeof aa);

//-----------------

// let a = {x:1};
// let b = a;
// b.x = 2;
// console.log(a.x);

//-----------------

// console.log(1 < 2 < 3);
// console.log(3 > 2 > 1);

//-----------------

//------------------------------------------------- MEDIUM -------------------------

//-----------------

// console.log("A");
// setTimeout(() => {
//   console.log("B");
// }, 0);
// console.log("C");

//-----------------

// console.log("start");
// setTimeout(() => {
//   console.log("timeout");
// }, 0);
// Promise.resolve().then(() => {
//   console.log("promise");
// });
// console.log("end");

//-----------------

// console.log("A");
// setTimeout(() => {
//   console.log("B");
// }, 0);
// Promise.resolve().then(() => {
//   console.log("C");
//   setTimeout(() => {
//     console.log("D");
//   }, 0);
// });
// console.log("E");

//-----------------

// console.log("start");
// setTimeout(() => {
//   console.log("timeout 1");
// }, 0);
// Promise.resolve()
//   .then(() => {
//     console.log("promise 1");
//     setTimeout(() => {
//       console.log("timeout 2");
//     }, 0);
//   })
//   .then(() => {
//     console.log("promise 2");
//   });
// console.log("end");

//-----------------

// console.log("start");
// Promise.resolve().then(() => {
//   console.log("p1");
// });
// Promise.resolve().then(() => {
//   console.log("p2");
// });
// console.log("end");

//-----------------

// console.log("start");
// setTimeout(() => console.log("t1"), 10);
// setTimeout(() => console.log("t2"), 0);
// console.log("end");

//-----------------

// console.log("start");
// setTimeout(() => {
//   console.log("timeout");
// }, 0);
// Promise.resolve()
//   .then(() => {
//     console.log("promise 1");
//   })
//   .then(() => {
//     console.log("promise 2");
//   });
// console.log("end");

//-----------------

// console.log("A");
// Promise.resolve().then(() => {
//   console.log("B");
//   Promise.resolve().then(() => {
//     console.log("C");
//   });
// });
// console.log("D");

//-----------------

// console.log("start");
// queueMicrotask(() => {
//   console.log("micro 1");
// });
// setTimeout(() => console.log("timeout"), 0);
// queueMicrotask(() => {
//   console.log("micro 2");
// });
// console.log("end");

//-----------------

// console.log("1");
// setTimeout(() => console.log("2"), 0);
// Promise.resolve().then(() => console.log("3"));
// console.log("4");

//-----------------

// async function fn() {
//   console.log("inside 1");
//   await null;
//   console.log("inside 2");
// }
// console.log("start");
// fn();
// console.log("end");

//-----------------

// async function asyncFn() {
//   console.log("A");
//   await Promise.resolve();
//   console.log("B");
// }
// console.log("start");
// setTimeout(() => console.log("timeout"), 0);
// asyncFn();
// console.log("end");

//-----------------

// async function test() {
//   console.log("X");
//   await Promise.resolve().then(() => console.log("Y"));
//   console.log("Z");
// }
// console.log("start");
// test();
// console.log("end");

//-----------------

// async function a() {
//   console.log("a1");
//   await a();
//   console.log("a2");
// }
// // Uncomment below carefully; recursion with await
// a();

//-----------------

// async function demo() {
//   return 42;
// }
// demo().then((v) => console.log(v));
// console.log("after");

//-----------------

// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }
// async function run() {
//   console.log("start");
//   await delay(0);
//   console.log("after delay");
// }
// run();
// console.log("end");

//-----------------

// let x = 1;
// async function inc() {
//   x++;
//   console.log("in async", x);
// }
// console.log("before", x);
// inc();
// console.log("after", x);

//-----------------

// console.log("A");
// Promise.resolve().then(() => {
//   console.log("B");
// });
// setTimeout(() => {
//   console.log("C");
//   Promise.resolve().then(() => console.log("D"));
// }, 0);
// console.log("E");

//-----------------

// let p = Promise.resolve().then(() => {
//   console.log("p1");
//   return "value";
// });
// p.then((v) => console.log("p2", v));
// console.log("sync");

//-----------------

// Promise.resolve()
//   .then(() => {
//     console.log("p1");
//     throw new Error("err");
//   })
//   .then(() => {
//     console.log("p2");
//   })
//   .catch(() => {
//     console.log("caught");
//   })
//   .then(() => {
//     console.log("p3");
//   });

//-----------------

// console.log("A");
// async function foo() {
//   try {
//     console.log("1");
//     await Promise.reject("error");
//     console.log("2");
//   } catch (e) {
//     console.log("caught", e);
//   }
//   console.log("3");
// }
// foo();
// console.log("end");

//-----------------

// console.log("start");
// setTimeout(() => console.log("timeout 1"), 0);
// Promise.resolve().then(() => {
//   console.log("promise 1");
//   setTimeout(() => console.log("timeout 2"), 0);
// });
// console.log("end");

//-----------------

// console.log("start");
// setTimeout(() => {
//   console.log("t1");
//   Promise.resolve().then(() => console.log("p1"));
// }, 0);
// Promise.resolve().then(() => console.log("p2"));
// console.log("end");

//-----------------

// let y = 1;
// (function () {
//   console.log("IIFE", y);
//   y = 2;
//   console.log("IIFE", y);
// })();
// console.log("global", y);

//-----------------

// function outer() {
//   let a = 10;
//   return function () {
//     console.log("a:", a);
//   };
// }
// const fn = outer();
// a = 20;
// fn();

//-----------------

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

//-----------------

// let arr = [];
// for (var i = 0; i < 3; i++) {
//   arr[i] = function () {
//     console.log("arr", i);
//   };
// }
// arr[0]();
// arr[1]();
// arr[2]();

//-----------------

// function create() {
//   var a = 100;
//   return function () {
//     console.log(a);
//     var a = 200;
//     console.log(a);
//   };
// }
// const f = create();
// f();

//-----------------

// console.log(a);
// var a = 1;
// (function () {
//   console.log(a);
//   var a = 2;
//   console.log(a);
// })();
// console.log(a);

//-----------------

// let z = 1;
// (function () {
//   console.log(z);
//   z = 2;
//   console.log(z);
// })();
// console.log(z);

//-----------------

// function log() {
//   console.log(k);
// }
// let k = 5;
// {
//   let k = 10;
//   log();
// }

//-----------------

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

//-----------------

// console.log("before");
// setTimeout(() => console.log("timeout"), 0);
// for (let i = 0; i < 1000000; i++) {}
// console.log("after");

//-----------------

// console.log("start");
// setTimeout(() => console.log("t1"), 0);
// Promise.resolve()
//   .then(() => console.log("p1"))
//   .then(() => console.log("p2"));
// console.log("end");

//-----------------

// let flag = false;
// setTimeout(() => {
//   flag = true;
//   console.log("timeout", flag);
// }, 0);
// while (!flag) {
//   console.log("loop");
//   break;
// }

//-----------------

// console.log(typeof a);
// function a() {}
// var a = 10;
// console.log(typeof a);

//-----------------

// console.log(typeof b);
// var b = 10;
// function b() {}
// console.log(typeof b);

//-----------------

// console.log("X");
// Promise.resolve()
//   .then(() => {
//     console.log("Y");
//   })
//   .then(() => {
//     console.log("Z");
//   });
// console.log("W");

//-----------------

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

//-----------------

// async function asyncLog() {
//   console.log("inside async 1");
//   await null;
//   console.log("inside async 2");
// }
// Promise.resolve().then(() => console.log("promise before"));
// asyncLog();
// Promise.resolve().then(() => console.log("promise after"));

//-----------------

// console.log("A");
// setTimeout(() => console.log("B"), 10);
// setTimeout(() => console.log("C"), 0);
// Promise.resolve().then(() => console.log("D"));
// console.log("E");

//-----------------

// function foo() {
//   console.log(this.value);
// }
// const obj = { value: 42 };
// const ref = foo;
// obj.method = foo;
// ref();
// obj.method();

//-----------------

// const obj2 = {
//   value: 10,
//   method: function () {
//     return () => {
//       console.log(this.value);
//     };
//   },
// };
// const ref2 = obj2.method();
// ref2();

//-----------------

// function weird() {
//   console.log(x);
//   if (true) {
//     function x() {}
//   }
//   console.log(x);
//   console.log(typeof x);
// }
// weird();

//-----------------

// console.log("start");
// new Promise((resolve) => {
//   console.log("in executor");
//   resolve();
// }).then(() => {
//   console.log("then");
// });
// console.log("end");

//-----------------

// console.log("A");
// Promise.resolve()
//   .then(() => {
//     console.log("B");
//     return Promise.reject("err");
//   })
//   .then(() => {
//     console.log("C");
//   })
//   .catch((e) => {
//     console.log("D", e);
//   })
//   .then(() => {
//     console.log("E");
//   });

//-----------------

// async function f1() {
//   console.log("f1 start");
//   await f2();
//   console.log("f1 end");
// }
// async function f2() {
//   console.log("f2");
// }
// console.log("script start");
// f1();
// console.log("script end");

//-----------------

// console.log("start");
// setTimeout(() => console.log("t1"), 0);
// setTimeout(() => console.log("t2"), 0);
// Promise.resolve().then(() => console.log("p1"));
// Promise.resolve().then(() => console.log("p2"));
// console.log("end");

//-----------------

// let v = 0;
// Promise.resolve()
//   .then(() => {
//     v += 1;
//     console.log("p1", v);
//   })
//   .then(() => {
//     v += 1;
//     console.log("p2", v);
//   });
// console.log("sync", v);

//-----------------

// async function seq() {
//   console.log("s1");
//   await Promise.resolve();
//   console.log("s2");
// }
// async function seq2() {
//   console.log("t1");
//   await Promise.resolve();
//   console.log("t2");
// }
// console.log("start");
// seq();
// seq2();
// console.log("end");

// start->s1->t1 ->end ->s2 ->t2

//-----------------

// function createCounter() {
//   let count = 0;
//   return {
//     inc: () => ++count,
//     dec: () => --count,
//     show: () => console.log(count),
//   };
// }
// const ctr = createCounter();
// ctr.inc();
// ctr.show();
// ctr.dec();
// ctr.show();

//-----------------

// console.log("start");
// let p1 = Promise.resolve().then(() => console.log("p1"));
// let p2 = Promise.resolve().then(() => console.log("p2"));
// Promise.all([p1, p2]).then(() => console.log("all done"));
// console.log("end");

//-----------------

// console.log("A");
// Promise.reject("err")
//   .then(() => console.log("B"))
//   .catch(() => console.log("C"))
//   .then(() => console.log("D"));
// console.log("E");

//-----------------

// let n = 1;
// async function incN() {
//   n++;
//   console.log("incN", n);
//   await null;
//   n++;
//   console.log("incN after await", n);
// }
// console.log("before", n);
// incN();
// console.log("after", n);

//-----------------

// async function order() {
//   console.log("1");
//   await Promise.resolve().then(() => console.log("2"));
//   console.log("3");
// }
// console.log("start");
// order();
// console.log("end");

//-----------------

// console.log("script start");
// setTimeout(() => {
//   console.log("setTimeout");
// }, 0);
// Promise.resolve()
//   .then(() => {
//     console.log("promise1");
//   })
//   .then(() => {
//     console.log("promise2");
//   });
// console.log("script end");

//-----------------

// console.log("X");
// const pA = Promise.resolve().then(() => {
//   console.log("Y");
// });
// const pB = pA.then(() => {
//   console.log("Z");
// });
// console.log("W");

//-----------------

// let g = 0;
// function schedule() {
//   Promise.resolve().then(() => {
//     console.log("micro", ++g);
//   });
//   setTimeout(() => {
//     console.log("macro B", ++g);
//   }, 0);
// }
// console.log("start");
// schedule();
// schedule();
// console.log("end");

//------------------------------------------------- HARD -------------------------
//-----------------

// console.log("A");
// setTimeout(() => console.log("B"), 0);
// Promise.resolve().then(() => console.log("C"));
// console.log("D");

//-----------------

// console.log("1");
// setTimeout(() => console.log("2"), 0);
// Promise.resolve()
//   .then(() => console.log("3"))
//   .then(() => console.log("4"));
// console.log("5");

//-----------------

// console.log("A");
// Promise.resolve()
//   .then(() => {
//     console.log("B");
//     setTimeout(() => console.log("C"), 0);
//   })
//   .then(() => console.log("D"));
// console.log("E");

//-----------------

// async function a() {
//   console.log("1");
//   await Promise.resolve();
//   console.log("2");
// }
// a();
// console.log("3");

//-----------------

// async function x() {
//   console.log("A");
//   await new Promise((res) => setTimeout(res, 0));
//   console.log("B");
// }
// x();
// console.log("C");

//-----------------

// Promise.resolve()
//   .then(() => {
//     console.log("p1");
//     return Promise.resolve();
//   })
//   .then(() => console.log("p2"));
// console.log("sync");

//-----------------

// console.log("start");
// setTimeout(()=>console.log("t1"));
// Promise.resolve().then(()=>{
//   console.log("p1");
//   Promise.resolve().then(()=>console.log("p2"));
// }).then(()=>console.log("p3"));
// console.log("end");

//-----------------

// let x = 1;
// setTimeout(() => {
//   console.log("timeout", x);
// }, 0);
// x = 2;
// console.log("sync", x);

//-----------------

// function outer() {
//   var a = 10;
//   return function () {
//     console.log(a);
//     var a = 20;
//   };
// }
// outer()();

//-----------------

// console.log("X");
// setTimeout(()=>console.log("Y"));
// Promise.resolve().then(()=>{
//   console.log("Z");
//   return Promise.resolve();
// }).then(()=>console.log("W"));
// console.log("Q");

//-----------------

// let funcs = [];
// for (var i = 0; i < 3; i++) {
//   funcs.push(() => console.log(i));
// }
// funcs[0]();
// funcs[1]();
// funcs[2]();

//-----------------

// console.log(a);
// var a = 1;
// function a(){}
// console.log(a);

//-----------------

// let a = 5;
// (function () {
//   console.log(a);
//   let a = 10;
// })();

//-----------------

// async function test() {
//   console.log("A");
//   await Promise.resolve().then(() => console.log("B"));
//   console.log("C");
// }
// test();
// console.log("D");

//-----------------

// Promise.resolve()
// .then(()=>{
//   console.log("1");
//   return Promise.reject();
// })
// .then(()=>console.log("2"))
// .catch(()=>console.log("3"))
// .then(()=>console.log("4"));

//-----------------

// console.log("A");
// queueMicrotask(()=>console.log("B"));
// console.log("C");

//-----------------

// const obj = {
//   value: 10,
//   method: () => console.log(this.value),
// };
// obj.method();

//-----------------

// console.log("1");
// Promise.resolve().then(() => {
//   console.log("2");
//   setTimeout(() => console.log("3"), 0);
// });
// console.log("4");

//-----------------

// async function foo() {
//   console.log(1);
//   await new Promise((res) => res());
//   console.log(2);
// }
// foo();
// console.log(3);

//-----------------

// let value = 0;
// Promise.resolve().then(() => {
//   console.log("p1", ++value);
//   setTimeout(() => console.log("t1", ++value), 0);
// });
// setTimeout(() => {
//   console.log("t2", ++value);
//   Promise.resolve().then(() => console.log("p2", ++value));
// }, 0);
// console.log("sync", value);

//-----------------

// function func() {
//   console.log(x);
// }
// let x = 10;
// {
//   let x = 20;
//   func();
// }

//-----------------

// function foo() {
//   console.log("foo");
// }
// (0 || foo)();

//-----------------

// console.log("start");
// let p = Promise.resolve();
// p.then(()=>console.log("p1"));
// p.then(()=>console.log("p2"));
// console.log("end");

//-----------------

// async function a() {
//   console.log("a1");
//   await 0;
//   console.log("a2");
// }
// async function b() {
//   console.log("b1");
//   await 0;
//   console.log("b2");
// }
// a();
// b();
// console.log("sync");

//-----------------

// console.log("start");
// setTimeout(()=>console.log("t1"));
// Promise.resolve().then(()=>console.log("p1"));
// Promise.resolve().then(()=>console.log("p2"));
// console.log("end");

//-----------------

// var a = 1;
// function test(){
//   console.log(a);
//   var a = 2;
// }
// test();

//-----------------

// console.log("start");
// new Promise(res=>{
//   console.log("in");
//   res();
// }).then(()=>console.log("then"));
// console.log("end");

//-----------------

// console.log("start");
// setTimeout(()=>console.log("t1"));
// setTimeout(()=>console.log("t2"));
// Promise.resolve().then(()=>console.log("p1"));
// console.log("end");

//-----------------

// function makeCounter(){
//   let c = 0;
//   return {
//     inc(){console.log(++c)},
//     dec(){console.log(--c)}
//   }
// }
// const c1 = makeCounter();
// const c2 = makeCounter();
// c1.inc();
// c2.inc();
// c1.dec();

//-----------------

// console.log("A");
// Promise.resolve().then(() => console.log("B"));
// queueMicrotask(() => console.log("C"));
// console.log("D");

//-----------------

// console.log(a);
// var a = function () {
//   console.log("func");
// };
// console.log(typeof a);

//-----------------

// async function one(){
//   console.log("1");
//   await Promise.resolve();
//   console.log("2");
// }
// async function two(){
//   console.log("A");
//   await Promise.resolve();
//   console.log("B");
// }
// one();
// two();
// console.log("sync");

//-----------------

// console.log("1");
// (function () {
//   console.log("2");
//   setTimeout(()=>console.log("3"));
//   Promise.resolve().then(()=>console.log("4"));
//   console.log("5");
// })();
// console.log("6");

//-----------------

// let v = 0;
// function testV(){
//   setTimeout(()=>console.log("timeout", v++),0);
//   Promise.resolve().then(()=>console.log("promise", v++));
// }
// testV();
// testV();
// console.log("sync", v);

//-----------------

// async function runAll() {
//   console.log("A");
//   await Promise.resolve("B").then(console.log);
//   console.log("C");
// }
// runAll();
// console.log("D");

//-----------------

// let k = 10;
// function print(){
//   console.log(k);
// }
// k = 20;
// print();
// k = 30;
// print();

//-----------------

// console.log(typeof sayHi);
// var sayHi = function(){};
// console.log(typeof sayHi);

//-----------------

// console.log("A");
// setTimeout(()=>console.log("B"),0);
// Promise.resolve().then(()=>{
//   console.log("C");
//   return Promise.resolve();
// }).then(()=>console.log("D"));
// console.log("E");

//-----------------

// let r = 1;
// Promise.resolve().then(()=>{
//   console.log("p1", r);
//   r++;
// });
// console.log("sync", r);

//-----------------

// const objx = {
//   value: 10,
//   inc: function(){this.value++; console.log(this.value)},
//   dec: () => {console.log(this.value)}
// }
// objx.inc();
// objx.dec();

//-----------------

// function log(n){
//   console.log("inside", n);
// }
// let z = 100;
// {
//   let z = 200;
//   log(z);
// }

//-----------------

// console.log("script start");
// setTimeout(() => {
//   console.log("timeout");
// }, 0);
// Promise.resolve().then(() => {
//   console.log("promise1");
// }).then(() => {
//   console.log("promise2");
// });
// console.log("script end");

//-----------------

// let g = 10;
// {
//   console.log(g);
//   let g = 20;
// }

//-----------------

// console.log("X");
// setTimeout(() => console.log("Y"), 0);
// Promise.resolve().then(() => console.log("Z"));
// console.log("W");

//-----------------

// async function chain(){
//   console.log("1");
//   await null;
//   console.log("2");
//   await null;
//   console.log("3");
// }
// console.log("start");
// chain();
// console.log("end");

//-----------------

// async function tricky(){
//   console.log("T1");
//   await Promise.resolve().then(()=>console.log("T2"));
//   console.log("T3");
// }
// console.log("start");
// tricky();
// Promise.resolve().then(()=>console.log("after"));
// console.log("end");

//-----------------

// let objRef = { a: 1 };
// const cpy = objRef;

// objRef = { a: 2 };
// console.log(cpy.a);

//-----------------

// console.log("A");
// setTimeout(()=>console.log("B"),10);
// setTimeout(()=>console.log("C"),0);
// Promise.resolve().then(()=>console.log("D"));
// console.log("E");

//-----------------

// let n = 1;
// const incSync = () => ++n;
// const incAsync = () => Promise.resolve().then(()=>++n);
// incSync();
// incAsync().then(console.log);
// console.log(n);

//-----------------

// function delayed() {
//   return new Promise((res) =>
//     setTimeout(() => {
//       console.log("later");
//       res();
//     }, 0)
//   );
// }
// async function run() {
//   console.log("A");
//   await delayed();
//   console.log("B");
// }
// run();
// console.log("C");

//-----------------

// console.log("start");
// const pA = Promise.resolve().then(() => console.log("pA"));
// const pB = pA.then(() => console.log("pB"));
// console.log("end");

//-----------------

// async function d(){
//   console.log("d1");
//   await Promise.resolve();
//   console.log("d2");
// }
// console.log("start");
// d();
// d();
// console.log("end");

//-----------------

// console.log("a");

// new Promise((resolve, reject) => {
//   console.log("b");
//   resolve("data");
//   console.log("c");
// }).then((data) => console.log(data));
// console.log("d");

//-----------------

// function myFunc() {
//   console.log(a);
//   var a = 10;
//   console.log(a);
//   if (false) {
//     var a = 20;
//   }
//   console.log(a);
// }
// myFunc();

//-----------------
// var c = {
//   a: "John",
//   b: function () {
//     console.log("hi " + this.a);
//     var setName = function () {
//       console.log(this);
//     };
//     setName();
//   },
// };

// c.b();
//-----------------

var c = {
  a: "John",
  b: function () {
    console.log("hi " + this.a);

    const setName = () => {
      console.log(this);
    };

    setName();
  },
};

c.b();
//-----------------
