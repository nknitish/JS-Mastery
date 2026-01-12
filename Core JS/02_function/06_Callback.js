// Cart > Create Order > Proceed to Payment

const handleCart = () => {
  let cart = [];

  const proceedToPayment = (cart = []) => {
    const totalAmt = cart.reduce((amt, curr) => (amt += 1), 0);
    console.log("Total Items", cart.join(", "), cart.length);
    console.log("Pay => ", totalAmt);
  };

  const verifyCart = (cart, fn) => {
    if (!cart.length) {
      console.log("Error : Cart Not Found");
      return;
    }

    console.log("Proceeding for payment ...");
    fn(cart);
  };
  return {
    addToCard: (item) => cart.push(item),
    getItems: cart,
    placeOrder: (data) => {
      console.log("Order is getting Placed !!!........");
      verifyCart(cart, proceedToPayment);
    },
  };
};

const myCart = handleCart();
myCart.orderStatus = function () {
  console.log("Order is on the way");
};

myCart.addToCard("Mango");
myCart.addToCard("Lichi");
myCart.addToCard("Banana");
console.log(myCart.getItems);
myCart.placeOrder(myCart.getItems);
myCart.orderStatus();
