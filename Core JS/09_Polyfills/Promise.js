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

//------------------------------------------------------------------------

//Promise.All
// Promise.all() takes an array (or iterable) of promises and returns a single promise that:

// ✔ Resolves when ALL promises resolve
// ❌ Rejects as soon as ANY ONE promise rejects
// ✔ Returns results in the same order as the input

//----------------------

Promise.myAll = function (arr) {
  if (!Array.isArray(arr)) {
    return Promise.reject(new TypeError("Argument must be an array"));
  }

  return new Promise((resolve, reject) => {
    const result = [];
    let remaining = arr.length;

    if (remaining === 0) {
      return resolve([]);
    }

    for (let i = 0; i < arr.length; i++) {
      Promise.resolve(arr[i])
        .then((value) => {
          result[i] = value;
          remaining--;

          if (remaining === 0) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
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

Promise.myRace = function (arr) {
  if (!Array.isArray(arr)) {
    return Promise.reject(new TypeError("Arguments must be an array"));
  }

  return new Promise((resolve, reject) => {
    if (arr.length === 0) {
      // Spec: returned promise stays pending forever
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      Promise.resolve(arr[i])
        .then((value) => {
          resolve(value); // first resolve wins
        })
        .catch((err) => {
          reject(err); // first reject wins
        });
    }
  });
};

// Promise.myRace([delay(200), delay(50)])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

//------------------------------------------------------------------------
// Promise.any();

Promise.myAny = function (arr) {
  if (!Array.isArray(arr)) {
    return Promise.reject(new TypeError("Arguments must be an array"));
  }

  return new Promise((resolve, reject) => {
    let remaining = arr.length;
    let errors = [];
    let settled = false;

    if (remaining === 0) {
      return reject(new AggregateError([], "All promises were rejected"));
    }

    for (let i = 0; i < arr.length; i++) {
      Promise.resolve(arr[i])
        .then((value) => {
          if (!settled) {
            settled = true;
            resolve(value);
          }
        })
        .catch((err) => {
          errors[i] = err;
          remaining--;

          if (!settled && remaining === 0) {
            settled = true;
            reject(new AggregateError(errors, "All promises were rejected"));
          }
        });
    }
  });
};
//------------------------------------------------------------------------
