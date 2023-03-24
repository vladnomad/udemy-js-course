"use strict";

// function *generator
/* 
function* generator() {
    yield "S";
    yield "c";
    yield "r";
    yield "i";
    yield "p";
    yield "t";
}

const str = generator();


console.log(str.next()); // { value: 'S', done: false } *1
console.log(str.next()); // { value: 'c', done: false } *2
console.log(str.next()); // { value: 'r', done: false } *3
console.log(str.next()); // { value: 'i', done: false } *4
console.log(str.next()); // { value: 'p', done: false } *5
console.log(str.next()); // { value: 't', done: false } *6
console.log(str.next()); // { value: undefined, done: true } *7

console.log(str.next().value); // S *1
console.log(str.next().value); // c *2
 */

function* count(n) {
    for (let i = 0; i <= n; i++) {
        yield i;
    }  
};

/* 
const counter = count(7);

console.log(counter.next().value) // 0
console.log(counter.next().value) // 1
console.log(counter.next().value) // 2 
*/

let arr = [];
let str = "";
let obj = {};

for (let k of count(7)) {
    // console.log(k);
    arr.push(k);
    k === 7 ? str += `${k}` : str += `${k}, `;
    for (let i = 0; i < k; i++) { obj[`Year ${k}`] = `${k * 365} days past`; }
}
// 1
// 2
// 3
// 4
// 5
// 6
// 7

console.log(arr); // [0, 1, 2, 3, 4, 5, 6, 7]
console.log(str); // 0, 1, 2, 3, 4, 5, 6, 7

console.log(obj); 
/* 
{
  'Year 1': '365 days past',
  'Year 2': '730 days past',
  'Year 3': '1095 days past',
  'Year 4': '1460 days past',
  'Year 5': '1825 days past',
  'Year 6': '2190 days past',
  'Year 7': '2555 days past' 
}
*/