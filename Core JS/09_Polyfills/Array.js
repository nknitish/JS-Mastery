let arr = [1, 2, 3, 4, 5, 7, 6, 7, , 8, 9, 10];

// Map

Array.prototype.map = function (cb) {
  const result = new Array(this.length);
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      result[i] = cb(this[i], i, this);
    }
  }

  return result;
};

// console.log(arr.map((e, i) => e + i * 2));

//------------------------------------------------------------------------

Array.prototype.myMap = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError("callback is not a function");
  }

  const O = Object(this);
  const len = O.length >>> 0; // Important for array-like support

  const result = new Array(len);

  for (let i = 0; i < len; i++) {
    if (i in O) {
      // Use thisArg correctly
      result[i] = callback.call(thisArg, O[i], i, O);
    }
  }

  return result;
};

//------------------------------------------------------------------------
// Filter

Array.prototype.filter = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      if (cb(this[i], i, this)) {
        result.push(this[i]);
      }
    }
  }

  return result;
};

// console.log(arr.filter((e) => e % 2 === 0));

//------------------------------------------------------------------------
//Reduce

Array.prototype.reduce = function (cb, initVal) {
  let result = initVal;

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      result = cb(result, this[i]);
    }
  }
  return result;
};

// console.log(arr.reduce((acc, val) => (acc += val), 0));

//------------------------------------------------------------------------
//ForEach

Array.prototype.forEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      cb(this[i], i, this);
    }
  }
};

// arr.forEach((e) => console.log(e));

//------------------------------------------------------------------------
//Find

Array.prototype.find = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      if (cb(this[i], i, this)) {
        return this[i];
      }
    }
  }
  return undefined;
};

// console.log(arr.find((e) => e == 17));

//------------------------------------------------------------------------

// Some
Array.prototype.some = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      if (cb(this[i], i, this)) {
        return true;
      }
    }
  }
  return false;
};
// console.log(arr.some((e) => e == 1));

//------------------------------------------------------------------------
//Every

Array.prototype.every = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      if (!cb(this[i], i, this)) {
        return false;
      }
    }
  }

  return true;
};

// console.log([2, 4, 6, 8, 10, 12].every((e) => e % 2 == 0));

//------------------------------------------------------------------------
//Includes

Array.prototype.includes = function (arg, fromIndex = 0) {
  for (let i = fromIndex; i < this.length; i++) {
    if (i in this) {
      if (this[i] === arg || (Number.isNaN(this[i]) && Number.isNaN(arg))) {
        return true;
      }
    }
  }
  return false;
};

// console.log("Hello world".includes("Hello "));
// console.log([1, 2, 3, 4, 5].includes(4));

//------------------------------------------------------------------------
//MyFlat
const myFlat = function (arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(myFlat(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }

  return result;
};
console.log(myFlat([[1, 2], 2, [3, 4], [100], 5, [3, 4, [5, [6, [8, 6, 8]]]]]));

//------------------------------------------------------------------------
// Flat

Array.prototype.flat = function (depth = 1) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (Array.isArray(this[i]) && depth > 0) {
      result = result.concat(this[i].flat(depth - 1));
    } else {
      result.push(this[i]);
    }
  }

  return result;
};
// console.log([[1, 2], 2, [3, 4], [100], 5, [3, 4, [5, [6, [8, 6, 8]]]]].flat(4));

//------------------------------------------------------------------------
//FlatMap

//------------------------------------------------------------------------
//Sort

Array.prototype.mySort = function (fn) {
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length; j++) {
      if (this[i] < this[j]) {
        [this[i], this[j]] = [this[j], this[i]];
      }
    }
  }
};

// console.log([1, 3, 2, 5, 2, -1, 56, 0].sort((a, b) => a - b));
// let tempArr = [1, 3, 2, 5, 2, -1, 56, 0];
// tempArr.mySort((a, b) => a - b);
// console.log(tempArr);

//------------------------------------------------------------------------
//Reverse

Array.prototype.reverse = function () {
  let start = 0;
  let end = this.length - 1;

  while (start < end) {
    [this[start], this[end]] = [this[end], this[start]];
    start++;
    end--;
  }

  return this;
};

// let numArr = [1, 2, 3, 4, 5, 7, 9];
// let strArr = Array.from("Hello World");
// numArr.reverse();
// strArr.reverse().join("");

// console.log({ numArr, str: strArr.join("") });

//------------------------------------------------------------------------

//Slice
Array.prototype.slice = function (start = 0, end = this.length) {
  start = Math.max(0, Math.min(start, this.length));
  end = Math.max(0, Math.min(end, this.length));

  let newArr = [];
  for (let i = start; i < end; i++) {
    newArr.push(this[i]);
  }

  return newArr;
};

// console.log([10, 20, , 30, 40, 50].slice(1, 3)); // [20, 30]
// console.log([10, 20, 30, 40, 50].slice(2)); // [30, 40, 50]
// console.log([10, 20, 30, 40, 50].slice());
