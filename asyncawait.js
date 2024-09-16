let orderPizza = new Promise((resolve, reject) => {
  let pizzaAvailable = true;
  setTimeout(() => {
    if (pizzaAvailable) {
      resolve("pizza is on its way");
    } else {
      reject("pizza is not available");
    }
  }, 2000);
});

async function placeorder() {
  try {
    console.log("ordering pizza....");
    let result = await orderPizza;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
placeorder();
