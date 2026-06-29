/*
=========================================
OBJECT CREATION, DESTRUCTURING, JSON
=========================================

This file shows object creation patterns, destructuring, and JSON parsing/stringifying.
*/

// Object literal
const user = { name: "Asha", age: 28 };

// Factory function
function createUser(name, age) {
  return { name, age, active: true };
}

const memoUser = createUser("Mia", 32);

// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person = new Person("Sam", 40);

// Class syntax
class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }
}

const student = new Student("Priya", "A");

// Destructuring
const { name, age } = user;
console.log("name", name, "age", age);

const numbers = [10, 20, 30];
const [first, second] = numbers;
console.log(first, second);

// JSON serialization and parsing
const json = JSON.stringify(user);
console.log("json", json);
const parsed = JSON.parse(json);
console.log("parsed", parsed);

/*
Explanation:
- Factory functions return objects directly.
- Constructor functions use `new` to create instances.
- Classes are syntactic sugar over constructor prototypes.
- Destructuring extracts values from objects and arrays.
- JSON methods are used for serialization and state transfer.
*/
