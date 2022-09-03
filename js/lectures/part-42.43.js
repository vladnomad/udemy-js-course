"use strict";

const box = document.getElementById("box"),
      btns = document.getElementsByTagName("button"),
      circles = document.getElementsByClassName("circle"),
      wrapper = document.querySelector(".wrapper"),
      hearts = wrapper.querySelectorAll(".heart"),
      oneHeart = wrapper.querySelector(".heart");

/*
hearts.forEach(item => {console.log(item);});
console.dir(box); 

box.style.backgroundColor = "blue";
box.style.width = "500px"; 
*/
let num = 500;
box.style.cssText = `background-color: blue; width: ${num}px;`;

btns[1].style.borderRadius = "100%";
circles[0].style.backgroundColor = "red";

/* 
for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = "green";
} 
*/

hearts.forEach(item => {
    item.style.backgroundColor = "green";
});

// const text = document.createTextNode("nmd was here");

const div = document.createElement("div");
div.classList.add("black");
document.body.append(div);

/* 
// MODERN METHODS

wrapper.append(div);
wrapper.prepend(div);

hearts[1].after(div);
hearts[1].before(div);

circles[0].remove();

hearts[2].replaceWith(circles[0]); 
*/

/* 
// DEPRECATED METHODS
wrapper.appendChild(div);
wrapper.insertBefore(div, hearts[0]);
wrapper.removeChild(hearts[1]);
wrapper.replaceChild(circles[0], hearts[0]); 
*/

div.innerHTML = "<h1>Hello World</h1>";
// div.textContent = "Hello";
div.insertAdjacentHTML("afterend", "<h2>Aloha</h2>");