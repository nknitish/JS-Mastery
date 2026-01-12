//What is callback funttion in javascript with example?

// A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. Callbacks are commonly used for asynchronous operations, such as handling events, making API calls, or performing tasks that take time to complete.

// Example of a callback function:

function fetchData(callback) {
  // Simulating an asynchronous operation using setTimeout
  setTimeout(() => {
    const data = { name: "John", age: 30 };
    // Once the data is fetched, we call the callback function with the data
    callback(data);
  }, 2000); // Simulate a 2-second delay
}

// This is the callback function that will be executed after data is fetched
function displayData(data) {
  console.log("Fetched Data:", data);
}

// Calling fetchData and passing displayData as a callback
fetchData(displayData);
