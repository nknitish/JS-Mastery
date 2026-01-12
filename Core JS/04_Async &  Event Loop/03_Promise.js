const createOrder = new Promise((res, rej) => {
  res("1");
});
const proceedToPayment = new Promise((res, rej) => {
  res(124);
});
const updateWallet = function (amt) {
  return new Promise((res, rej) => {
    let totalAmt = 1000;
    res(totalAmt - amt);
  });
};

// createOrder
//   .then((orderId) => {
//     console.log("OrderID", orderId);
//     return proceedToPayment;
//   })
//   .then((amt) => {
//     console.log("Amt", amt);
//     return updateWallet(amt);
//   })
//   .then((finalAmt) => {
//     console.log("Ramaining Amt", finalAmt);
//   });

//--------------------------------------------ASYNC/AWAIT----------------------------------------------

// Always return a promise.
async function getData() {
  //If not return a promise , it will wrap by promise and then return
  return "Hello World";
}

// const data = await getData(); // Await can be used inside only as
// console.log("data", data);

//---------------------------------------

function delay(time) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Delay is resolved ");
    }, time);
  });
}

async function handlePrint() {
  console.log("A");
  let data = await delay(1000);
  console.log("Data", data);
  console.log("C");
}

// handlePrint();

//------------------------------------------

Promise.all([delay(500), delay(200)]).then((res) => console.log(res));
