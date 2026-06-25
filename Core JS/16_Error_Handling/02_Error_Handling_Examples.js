// Error handling examples and best practices.

function parseJsonSafe(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error('JSON parse failed:', error.message);
    return null;
  }
}

function fetchData(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network error: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Request failed:', error.message);
      throw error;
    });
}

console.log('Safe JSON parse:', parseJsonSafe('{ "foo": 1 }'));
console.log('Safe JSON parse invalid:', parseJsonSafe('not-json'));
