// console.log("Logging from the index.js of the coffee app");

document.addEventListener("DOMContentLoaded", () => {
  addMyListeners();
  getCoffees();
});

function addMyListeners() {
  document.getElementById("filter").addEventListener("click", e => filter(e));
  document
    .getElementById("next-results")
    .addEventListener("click", () => getCoffees());
}

function filter(e) {
  e.preventDefault();
  pageNumber = 0;
  getCoffees();
}

let pageNumber = 0;

function getCoffees() {
  const filterValue = document.querySelector("input", "name").value;
  fetch(
    `http://localhost:3000/coffee/?limit=5&offset=${pageNumber}&origin=${filterValue}`
  )
    .then(res => res.json())
    .then(res => displayCoffees(res))
    .catch(err => console.log(err));
  pageNumber++;
}

function displayCoffees(coffees) {
  document.getElementById("coffee-list").innerText = "";
  coffees.forEach(coffee => displayOneCoffee(coffee));
}

function displayOneCoffee(coffee) {
  console.log(coffee);
  const coffeeUL = document.getElementById("coffee-list");

  const coffeeLi = document.createElement("li");

  const coffeeH3 = document.createElement("h3");
  coffeeH3.innerText = coffee.name;

  const originP = document.createElement("p");
  originP.innerText = `Origin: ${coffee.origin}`;

  const notesP = document.createElement("p");
  notesP.innerText = `Notes: ${coffee.notes}`;

  coffeeLi.appendChild(coffeeH3);
  coffeeLi.appendChild(originP);
  coffeeLi.appendChild(notesP);

  coffeeUL.appendChild(coffeeLi);
}
