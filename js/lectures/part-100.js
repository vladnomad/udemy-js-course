"use strict";

// 96 Regular Expressions

// new RegExp("pattern", "flags");
// /pattern/flags
// i - any register 
// g - global (all instances) 
// m - multiline
/* 
const answer = prompt("Enter your name");

const reg = /n/i;
console.log(answer.search(reg));

const reg = /n/g;
console.log(answer.match(reg));
 */
/* 
const pass = prompt("Enter your password");
const reg = /n/m;
console.log(pass.replace(/./g, "*"));
console.log(pass.replace(/\./g, "*"));

console.log("12-34-56".replace(/-/g, ":")); 
*/

//console.log("12-34-56".replace(/-/g, ":"));

// const answ = prompt("Enter a number");

/* 
const reg = /n/ig;
console.log(reg.test(answ)); 
*/
/* 
const reg = /\d/;
console.log(answ.match(reg)); 
*/
/* 
const width = "200px",
      reg = /\d/g;
console.log(width.match(reg));  
*/

// Digits \d
// Words \w
// Space \s

const str = "My name is R2D2";

console.log(str.match(/\w\d\w\d/i));
console.log(str.match(/\W/ig));
console.log(str.match(/\D/ig));

// NOT:  \D  \W