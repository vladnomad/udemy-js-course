"use strict";

const btn = document.querySelector(".btn"),
      el = document.querySelector(".box");

let pos = 0;

function myAnimation() {
    pos++;
    el.style.top = pos + "px";
    el.style.left = pos + "px";

    if (pos < 300) {
        requestAnimationFrame(myAnimation);
    }
}

btn.addEventListener("click", () => requestAnimationFrame(myAnimation));

let id = requestAnimationFrame(myAnimation);
cancelAnimationFrame(id);