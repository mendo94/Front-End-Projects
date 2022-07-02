let menuUL = document.getElementById("menuUL");
let displayStarters = document.getElementById("starters");
let displayEntrees = document.getElementById("entrees");
let displayDesserts = document.getElementById("desserts");
let fullMenu = document.getElementById("fullMenu");

function allItems(menuList) {
  let menuItems = menuList.map(function (menu) {
    let menuItem = `<li class="food-items">
    <h2>${menu.title}</h2>
    <p>${menu.description}</p>
    <p>$${menu.price}.00</p>
    <img src=${menu.imageURL}></img>
  </li>`;
    return menuItem;
  });
  menuUL.innerHTML = menuItems.join("");
}

allItems(dishes);

fullMenu.addEventListener("click", function () {
  allItems(dishes);
});

displayStarters.addEventListener("click", function () {
  let filterStarters = dishes.filter(function (menu) {
    return menu.course === "Starters";
  });
  allItems(filterStarters);
});

displayEntrees.addEventListener("click", function () {
  let filterEntrees = dishes.filter(function (menu) {
    return menu.course === "Entrees";
  });
  allItems(filterEntrees);
});

displayDesserts.addEventListener("click", function () {
  let filterDesserts = dishes.filter(function (menu) {
    return menu.course === "Desserts";
  });
  allItems(filterDesserts);
});
