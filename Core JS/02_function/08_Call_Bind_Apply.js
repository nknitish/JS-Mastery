//--------------------------------------------------------------

//--------------------------------------------------------------
//CAll

const obj = {
  name: "Nitish",
  getName: function (...arg) {
    console.log("My Name is ", this.name, " args ", arg);
  },
};

obj.getName();

const obj2 = {
  name: "Mishra",
};

//Share funciton getName with Obj2
obj.getName.call(obj2, "A", "B"); // Mishra

//--------------------------------------------------------------
//Apply

obj.getName.apply(obj2, ["A", "B", "C"]);

//--------------------------------------------------------------
//Bind

let fn = obj.getName.bind(obj2);
fn("D", "E");

//--------------------------------------------------------------

// EX : //Append a Array to another
const arr = [1, 2, 3];
const arrText = ["a", "b", "c"];

arr.push.apply(arr, arrText);
console.log(arr);
//--------------------------------------------------------------
