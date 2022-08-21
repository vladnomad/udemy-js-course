"use strict";

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log("Stay");
} else {
    console.log("Leave");
}

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);

const Hamburger = 3;
const Fries = 1;
const Cola = 0;

console.log(Hamburger === 3 && Cola  && Fries);

console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && 'string');

if (hamburger === 3 && cola === 1 && fries) {
    console.log("Stay");
} else {
    console.log("Leave");
}

const hAmburger = 5;
const fRies = 0;

if (hAmburger && fRies) {
    console.log('Full');
}