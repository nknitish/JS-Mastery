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
