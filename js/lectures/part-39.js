"use strict";

// To String

// 1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2)
console.log(typeof(5 + ""));

const num = 5;
console.log("https://facebook.com/catalog/" + num);

const fontSize = 26 + "px";


// To Number

// 1)
console.log(typeof(Number("4")));

// 2)
console.log(typeof(+"4"));
let answ = +prompt("Hello", "");

// 3)
console.log(typeof(parseInt("15px", 10)));


// To Boolean

// FALSE - 0, "", null, undefined, NaN;

// 1)
let switcher = null;
/* switcher = 1; */
if (switcher) {
    console.log("Working...");
}

// 2)
console.log(typeof(Boolean("4")));

// 3)
console.log(typeof(!!"4"));
