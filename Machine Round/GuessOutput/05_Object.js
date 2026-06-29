//-----------------------------------------

function makeUser() {
  return {
    name: "John",
    reference: this,
    ref() {
      return this;
    },
  };
}

let user = makeUser();

//Here the value of this inside makeUser() is undefined, because it is called as a function, not as a method with “dot” syntax.
console.log(user.reference.name);
console.log(user.ref().name); //John

//-----------------------------------------
