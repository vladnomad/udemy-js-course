"use strict";

console.log( NaN || 2 || undefined );               // 2
console.log( NaN && 2 && undefined );               // NaN
console.log( 1 && 2 && 3 );                         // 3
console.log( !1 && 2 || !3 );                       // 2 (false)
console.log( 25 || null && !3 );                    // 25
console.log( NaN || null || !3 || undefined || 5 ); // 5
console.log( NaN || null && !3 && undefined || 5 ); // 5
console.log( 5 === 5 && 3 > 1 || 5 );               // true

// I. 7/8 correct

const hamburger0 = 3;   
const fries0 = 3;
const cola0 = 0;
const nuggets0 = 2;

if (hamburger0 === 3 && cola0 || fries0 === 3 && nuggets0) {
    console.log("Done!");
} // "Done!"

// II. correct

let hamburger1;   
const fries1 = NaN;
const cola1 = 0;
const nuggets1 = 2;

if (hamburger1 || cola1 || fries1 === 3 || nuggets1) {
    console.log("Done!");
} // "Done!"

// III. correct

let hamburger2;   
const fries2 = NaN;
const cola2 = 0;
const nuggets2 = 2;

if (hamburger2 && cola2 || fries2 === 3 && nuggets2) {
    console.log("Done!");
} // ---

// IV. correct