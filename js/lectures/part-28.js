"use strict";

const str = "test";
const arr = [1, 2, 4];

// console.log(str[2] = 'x');

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));

const logg = "Hello world";

console.log(logg.slice(6, 11));
console.log(logg.slice(-5, -0));

console.log(logg.substr(6, 5));

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
// console.log(parseInt(test));
console.log(parseFloat(test));