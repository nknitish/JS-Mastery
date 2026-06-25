// module-b.mjs — imports named + default from module-a.mjs
import greet, { PI, add } from "./module-a.mjs";

console.log("PI:", PI);
console.log("add(2,3):", add(2, 3));
console.log(greet("Alice"));
