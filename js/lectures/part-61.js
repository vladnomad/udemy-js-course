"use strict";

console.log(Number.MAX_SAFE_INTEGER);
// 9007199254740991

const bigi = 123123124351251351513523164372457024591039n,
      sameBigi = BigInt(123123124351251351513523164372457024591039);

console.log(typeof(sameBigi)); // bigint
// console.log(5n + 1);
// console.log(Math.round(5n));
console.log(2n + 1n);  // 3n
console.log(5n / 2n);  // 2n
console.log(2n > 1n);  // true
console.log(2n > 1);   // true
console.log(2n == 2);  // true
console.log(2n === 2); // false

let bigint = 1n,
    number = 2;

console.log(bigint + BigInt(number)); // 3n
console.log(number + Number(bigint)); // 3
console.log(+bigint + number);        // error