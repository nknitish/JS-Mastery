/*
=========================================
PROMISES ONE BY ONE WITH 1 SECOND GAP
=========================================

Question:
How do you execute promise one by one with an interval of 1 second,
when the input is an array of promises?

This pattern runs promises sequentially instead of all at once.
*/

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const jobs = [
  () => Promise.resolve("Task 1 done"),
  () => Promise.resolve("Task 2 done"),
  () => Promise.resolve("Task 3 done"),
  () => Promise.resolve("Task 4 done"),
];

async function runSequentiallyWithDelay(tasks, delayMs = 1000) {
  const results = [];

  for (let i = 0; i < tasks.length; i++) {
    const result = await tasks[i]();
    results.push(result);
    console.log("Result:", result);

    if (i !== tasks.length - 1) {
      await wait(delayMs);
    }
  }

  return results;
}

runSequentiallyWithDelay(jobs, 1000)
  .then((res) => console.log("All done:", res))
  .catch((err) => console.log("Error:", err));

/*
Explanation:
- each task runs only after the previous one finishes
- after each task result, we wait 1 second before starting the next one
- this is useful when APIs or systems cannot handle burst requests
*/
