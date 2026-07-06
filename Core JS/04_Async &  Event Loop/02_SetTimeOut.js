// console.log("A");
// setTimeout(() => {
//   console.log("B");
// }, 1000);

// console.log("C");

// A C B

//----How to block main tread to get ABC

// function block(delay) {
//   let endTime = new Date().getTime() + delay;
//   while (new Date().getTime() < endTime) {}
// }

// console.log("A");

// block(5000);
// setTimeout(() => console.log("Hello World"), 1000);

// console.log("B");

//--------------------------------------------------
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function demo() {
  console.log("Start");
  await sleep(2000); // wait 2 seconds
  console.log("After 2 seconds");
}

demo();
