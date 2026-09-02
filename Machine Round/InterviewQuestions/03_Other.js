//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
//Print till n after one second of delay

//MindTickle

const printTillNumber = (n) => {
  //----------------------------

  for (let i = 0; i < n; i++) {
    setTimeout(() => {
      console.log(i + 1);
    }, i * 1000);
  }

  //----------------------------
  // let count = 1;
  // let timer = setInterval(() => {
  //   if (count === n) {
  //     clearInterval(timer);
  //     return;
  //   }
  //   console.log(count);
  //   count++;
  // }, 1000);
  //----------------------------
};

// printTillNumber(4);

//---------------------------------------------------------------------------------
// Check if number is prime or not

const isPrime = (n) => {
  if (n < 2) return false;

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

// console.log(isPrime(22));

//---------------------------------------------------------------------------------

function getValue() {
  try {
    throw new Error("Service Error");
    return 2;
  } catch (e) {
    return 3;
  } finally {
    return 10;
  }

  return 7;
}

// console.log(getValue()); //10

//---------------------------------------------------------------------------------

// let a = { a: "1", b: 2 };
// let b = { b: 3, c: 5 };
// let newObj = Object.assign(b, a);
// console.log(newObj);

//---------------------------------------------------------------------------------

const findSecondLargest = (arr = []) => {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let value of arr) {
    if (value > largest) {
      secondLargest = largest;
      largest = value;
    } else if (value > secondLargest && value !== largest) {
      secondLargest = value;
    }
  }

  return secondLargest;
};

// console.log(findSecondLargest([1, 2, 5, 6, 7, 9, 2, 10]));

//---------------------------------------------------------------------------------

const findThirdLargest = (arr = []) => {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  let thirdLargest = -Infinity;

  for (let value of arr) {
    if (value > largest) {
      thirdLargest = secondLargest;
      secondLargest = largest;
      largest = value;
    } else if (value > secondLargest && value !== largest) {
      thirdLargest = secondLargest;
      secondLargest = value;
    } else if (value > thirdLargest && value !== secondLargest) {
      thirdLargest = value;
    }
  }

  return thirdLargest;
};

// console.log(findThirdLargest([4, 1, 2, 3]));

//---------------------------------------------------------------------------------

const printCharCount = (arr = []) => {
  if (!arr.length) return;

  let count = 1;
  let result = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      count++;
    } else {
      result.push(arr[i - 1] + count);
      count = 1;
    }
  }

  return result.join("");
};
console.log(printCharCount(["a", "a", "a", "b", "c", "c", "d"])); //a3b1c2
//---------------------------------------------------------------------------------
