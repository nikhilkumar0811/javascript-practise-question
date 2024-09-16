let orderPizza = new Promise(function (resolve, reject) {
  let pizzaAvailable = true;

  if (pizzaAvailable) {
    resolve("pizza is on its way");
  } else {
    reject("pizza is not available");
  }
});

orderPizza
  .then(function (message) {
    console.log(message);
  })
  .catch(function (message) {
    console.log(message);
  });
