// Error handling examples and best practices.

function parseJsonSafe(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("JSON parse failed:", error.message);
    return null;
  }
}

console.log("Safe JSON parse:", parseJsonSafe('{ "foo": 1 }'));
console.log("Safe JSON parse invalid:", parseJsonSafe("not-json"));
