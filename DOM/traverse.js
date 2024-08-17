const title = document.querySelector(".heading");
// console.log(title.parentNode);
const parent = document.querySelector(".parent");
console.log(title.parentElement);
console.log(parent.firstChild);
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);
console.log(parent.childNodes);
// console.log(parent.);
// space also count as child node and will give text.

// select sibiling 

const second = document.querySelector(".second");
console.log(second.previousElementSibling);
console.log(second.nextElementSibling);

// manupulating element

// create element
let div = document.createElement("div");
div.innerHTML("<p>Learning DOM <p>");
div.id="title-message";
console.log(div);

// appendChild
// let menu = document.getElementById("menu");
// let li = document.createElement("li");
// li.innerHTML = "Contact";

// menu.appendChild(li);

// textContent
let menu = document.getElementById("menu");

// menu.textContent = "New List";
// console.log(menu);
console.log(menu.innerText);
console.log(menu.textContent);
