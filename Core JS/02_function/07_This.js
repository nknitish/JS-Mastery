// "use strict";

//How this behave in gloabl space.
// console.log(this); //Gloal Object

//--------------------------------------------------------------
//This inside funtion
function x() {
  console.log(this);
}

// x(); // Window // But in strict mode it will be undefined.

//--------------------------------------------------------------
//This keyword depends on how it is being called.

//without any reference
// x(); // undefined.

//With reference it point to parent.
// window.x(); // Window

//--------------------------------------------------------------

//This inside object funtion

const obj = {
  name: "Nitish",
  getName: function (arg) {
    console.log("My Name is ", this.name, " args ", arg);
  },
};

obj.getName();

//--------------------------------------------------------------

//--------------------------------------------------------------
//This inside Arrow Funcions
//Refered to enclosing lexical context

const student = {
  name: "A",
  printMyName: () => {
    console.log(this);
  },
  printMyName2: function () {
    const x = () => {
      console.log(this);
    };
    x();
  },
};
student.printMyName(); // Window
student.printMyName2(); // Student Object

//--------------------------------------------------------------
//This inside html =>  Refence to HTMlelement
//--------------------------------------------------------------
