function delay(time) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(time);
    }, time);
  });
}

function rejectedPromise() {
  return new Promise((res, rej) => {
    rej(new Error("Rejected Promise"));
  });
}

function rejectAfter(time) {
  return new Promise((_, reject) => {
    setTimeout(() => reject("Failed"), time);
  });
}

//------------------------------------------------------------------------

//Promise.All
// Promise.all() takes an array (or iterable) of promises and returns a single promise that:

// ✔ Resolves when ALL promises resolve
// ❌ Rejects as soon as ANY ONE promise rejects
// ✔ Returns results in the same order as the input

//----------------------

Promise.myAll = function (arr = []) {
  if (!Array.isArray(arr)) throw new TypeError("Aguments must be an array");

  return new Promise((resolve, reject) => {
    let result = [];
    let remaining = arr.length;

    if (arr.length === 0) {
      resolve([]);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      Promise.resolve(arr[i])
        .then((res) => {
          result[i] = res;

          remaining--;

          if (remaining === 0) {
            resolve(result);
          }
        })
        .catch(reject);
    }
  });
};

//----------------------

// Promise.myAll([delay(200), delay(500)])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//------------------------------------------------------------------------

// Promise.allSettled()

Promise.myAllSettled = function (arr) {
  if (!Array.isArray(arr)) {
    return Promise.reject(new Error("Argument must be an array"));
  }

  return new Promise((resolve) => {
    const result = [];
    let remaining = arr.length;

    if (remaining === 0) {
      return resolve([]);
    }

    for (let i = 0; i < arr.length; i++) {
      Promise.resolve(arr[i])
        .then((value) => {
          result[i] = { status: "fulfilled", value };
        })
        .catch((reason) => {
          result[i] = { status: "rejected", reason };
        })
        .finally(() => {
          remaining--;
          if (remaining === 0) {
            resolve(result);
          }
        });
    }
  });
};

// Test
// Promise.myAllSettled([delay(200), rejectedPromise(), delay(5000)])
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((e) => console.log("Error :", e));

//------------------------------------------------------------------------
// Promise.race()
// Returns the first resolved or rejected promices

Promise.myRace = function (arr = []) {
  // Error Check
  if (!Array.isArray(arr)) throw new TypeError("Arguments must be an Array");

  return new Promise((resolve, reject) => {
    for (let item of arr) {
      Promise.resolve(item).then(resolve).catch(reject);
    }
  });
};

// Promise.myRace([delay(200), delay(50)])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

//------------------------------------------------------------------------
// Promise.any();

/**
 * Promise.any() resolves with the first fulfilled promise and ignores rejected promises. If all input promises reject, it rejects with an AggregateError containing all rejection reasons. It's useful when you only need one successful result, such as querying multiple servers or fallback APIs."
 */

Promise.myAny = function (arr = []) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Arguments must be an Array");
  }

  return new Promise((resolve, reject) => {
    if (arr.length === 0) {
      reject(new AggregateError([], "All promises were rejected"));
      return;
    }

    const errors = new Array(arr.length);
    let remaining = arr.length;

    arr.forEach((item, index) => {
      Promise.resolve(item)
        .then(resolve)
        .catch((err) => {
          errors[index] = err;

          remaining--;

          if (remaining === 0) {
            reject(new AggregateError(errors, "All promises were rejected"));
          }
        });
    });
  });
};
//------------------------------------------------------------------------
