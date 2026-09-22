/*
=========================================
RETRY PATTERN
=========================================
*/

const fetchData = () => {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => {
      console.log("JSON:", json);
      return json;
    })
    .catch((err) => {
      console.log("Error ", err);
      throw err;
    });
};

const retry = async (fn, retries) => {
  while (true) {
    try {
      return await fn();
    } catch (error) {
      if (retries === 0) {
        throw error;
      }

      console.log("Retries left:", retries);
      retries--;
    }
  }
};

retry(fetchData, 3)
  .then((res) => console.log("Final result:", res))
  .catch((err) => console.log("Final error:", err));
