const displayOrder = document.getElementById("display-order");
const emailOrder = document.getElementById("emailOrder");
const searchOrder = document.getElementById("searchOder");
const startOrder = document.getElementById("startOrder");
const submitBtn = document.getElementById("submit-btn");
const selectType = document.getElementById("type");
const selectSize = document.getElementById("size");

//POST
//////////////////////////////////////////////

submitBtn.addEventListener("click", function () {
  let request = new XMLHttpRequest();
  request.open("POST", "https://troubled-peaceful-hell.glitch.me/orders");
  request.setRequestHeader("Content-Type", "application/json");

  const body = {
    email: emailOrder.value,
    type: type.value,
    size: size.value,
    price: 3.44,
  };
  request.addEventListener("load", function () {
    console.log(this.responseText);
  });
  request.send(JSON.stringify(body));
});

//GET
/////////////////////////////////////////////
// newOrders = {
//   email: "",
//   type: "",
//   size: "",
//   price: 2.5,
// };

// selectType.addEventListener("click", function () {
//   console.log(this.value);
//   const selectedType = this.value;
// });

// selectSize.addEventListener("click", function () {
//   console.log(this.value);
//   const selectedSize = this.value;
// });

//   newOrders.email = emailOrder.value;
//   newOrders.type = selectType.value;
//   newOrders.size = selectSize.value;
//   newOrders.price = 2.99;
//   console.log(newOrders);
// });

function getOrdrers(coffeeFetched) {
  let request = new XMLHttpRequest();
  request.open("GET", "https://troubled-peaceful-hell.glitch.me/orders");
  request.addEventListener("load", function () {
    const coffees = JSON.parse(this.responseText);
    coffeeFetched(coffees);
  });
  request.send();
}

function displayTheOrders(coffees) {
  // let coffeeDisplay = JSON.parse(this.responseText);
  const coffeeItems = coffees.map(function (coffee) {
    return `<ul class="coffeeUL">
    <li>${coffee.email}</li>
    <li>${coffee.type}</li>
    <li>${coffee.size}</li>
    <li>${coffee.price}</li>
    </ul>
    <button>Delete</button>`;
  });
  displayOrder.innerHTML = coffeeItems;
}

getOrdrers(function (coffees) {
  displayTheOrders(coffees);
});
