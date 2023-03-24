"use strict";
/* 
console.log(1);

setTimeout(() => {
    console.log("timeout");
}, 2000);

setTimeout(() => {
    console.log("timeout-4s");
}, 4000);

console.log(2);
 */

/* 
let k = 0;

function count() {
    for (let i = 0; i < 1e9; i++) {
        k++;
    }
    alert("done");
}

count(); 
*/
// deconstruct heavy operations

setTimeout(() => {
    console.log(1);
}, 0); // 4ms is default

console.log(2);
// 2
// 1