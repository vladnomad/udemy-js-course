"use strict";

/* 
// const now = new Date();
// const now = new Date("2022-11-08");
// const now = new Date(2022, 10, 8, 21);
// const now = new Date(0);

// console.log(now.getFullYear());
// console.log(now.getMonth() + 1);
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

const now = new Date();
// new Date.parse("2022-08-11");

console.log(now.setHours(18));
console.log(now); 
*/

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Cycle has taken ${end - start} milliseconds`);