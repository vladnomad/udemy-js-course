"use strict";

const box = document.getElementById("box"),
      btns = document.getElementsByTagName("button")[1],
      circles = document.getElementsByClassName("circle"),
      hearts = document.querySelectorAll(".heart"),
      oneHeart = document.querySelector(".heart");

// hearts.forEach(item => {console.log(item);});
// console.dir(box);

box.style.backgroundColor = "blue";