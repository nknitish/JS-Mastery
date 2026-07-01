// https://javascript.info/prototype-inheritance

let animal = {
  eats: true,
  walk() {
    console.log("Animal walk");
  },
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

// walk is taken from the prototype
rabbit.walk(); // Animal walk

for (let key in rabbit) {
  console.log(key); // Jump , Eat, Walk

  let isOwn = rabbit.hasOwnProperty(key);

  if (isOwn) {
    console.log(`Our: ${key}`); // Our: jumps
  } else {
    console.log(`Inherited: ${key}`); // Inherited: eats
  }
}
