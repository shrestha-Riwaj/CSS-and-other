// DOM Manipulation

// console.log("hello");


// getElementById()
// const container =  document.getElementById("container");
// console.log(container)
// getElementByClassName()

// const items= document.getElementsByClassName("list-items");
// console.log(items)

// getElementByTagname()
// const ul = document.getElementsByTagName("li");
// console.log(ul);
// querySelector()
// const title = document.querySelector("div");
// console.log(title);


// querySelectorAll()


// const multiple = document.querySelectorAll("div");
// console.log(multiple);

// styling element
// const title = document.querySelector("#title");
// title.style.color="red";

// const list_items = document.querySelectorAll(".list-items");
// list_items.style.color="yellow";

// for(var i = 0; i<list_items.length; i++){
//     list_items[i].style.fontSize="2rem";
// }

// creating element
const ul = document.querySelector("ul");
const li = document.createElement("li");

// adding element

ul.append(li);
li.innerText="Ambulance";
// modifying element
// const first_item = document.querySelector(".list-items");
// console.log(first_item.textContent);
// console.log(first_item.innerText);
// console.log(first_item.innerHTML);

// modifying attributes and classes
// li.setAttribute('id',"title");
// // li.removeAttribute('id');

// const title = document.querySelector("#title");
// console.log(title.getAttribute('id'));

// classes

