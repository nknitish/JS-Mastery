/*
=========================================
LIMITED CONCURRENCY - 20 REQUESTS, 3 AT A TIME, 1S GAP
=========================================

Interview question:
"Call 20 requests at once, but only 3 requests should run at a time,
 and there should be a gap of 1 second between each request."

This file demonstrates one way to solve it using Promise scheduling.
*/

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function fetchTask(id) {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        const success = true;
        if (success) {
          resolve(`Request ${id} completed`);
        } else {
          reject(`Request ${id} failed`);
        }
      },
      300 + (id % 5) * 100,
    );
  });
}

async function runWithLimit(tasks, limit, gapMs = 1000) {
  const results = [];
  let index = 0;

  const worker = async () => {
    while (index < tasks.length) {
      const currentIndex = index++;
      try {
        const result = await tasks[currentIndex]();
        results.push(result);
        console.log(result);
      } catch (error) {
        console.log("Error:", error);
      }

      if (currentIndex < tasks.length - 1) {
        await delay(gapMs);
      }
    }
  };

  const workers = Array.from({ length: Math.min(limit, tasks.length) }, worker);
  await Promise.all(workers);
  return results;
}

const tasks = Array.from({ length: 20 }, (_, i) => () => fetchTask(i + 1));

runWithLimit(tasks, 3, 1000)
  .then((res) => console.log("All tasks completed:", res.length))
  .catch((err) => console.log("Unexpected error:", err));

/*
How this works:
- Only 3 workers run at a time
- Each task is a function returning a Promise
- After each task finishes, the next one waits for the gap
- This ensures controlled concurrency and pacing
*/
