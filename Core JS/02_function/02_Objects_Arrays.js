/*
=========================================
OBJECT CREATION, DESTRUCTURING, JSON
=========================================

This file shows object creation patterns, destructuring, and JSON parsing/stringifying.
*/

// Object literal
const user = { name: "Asha", age: 28 };

// Factory function // A factory function is simply a function that creates and returns an object.
function createUser(name, age) {
  return { name, age, active: true };
}

const memoUser = createUser("Mia", 32);

// Constructor function //A constructor function is a special function used with the new keyword to create objects.
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

/**
 * 
 * | Feature           | Factory Function                        | Constructor Function                     |
| ----------------- | --------------------------------------- | ---------------------------------------- |
| Uses `new`        | ❌ No                                    | ✅ Yes                                    |
| Returns object    | Manually                                | Automatically                            |
| Uses `this`       | Optional                                | Yes                                      |
| Prototype support | Not automatic                           | Built in                                 |
| Shared methods    | Not by default                          | Yes (`prototype`)                        |
| Private variables | Excellent (closures)                    | Possible, but not with prototype methods |
| Memory efficient  | Less efficient if methods are recreated | More efficient with prototype methods    |

 */
