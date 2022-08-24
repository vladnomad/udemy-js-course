"use strict";
/* 
let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

const copyObj = obj;

copyObj.a = 10;

console.log(copyObj);
console.log(obj);
 */
function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

console.log(numbers);
console.log(newNumbers);

newNumbers.a = 4;
console.log(newNumbers);

newNumbers.c.x = 1;
console.log(newNumbers);

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add));

const clone = Object.assign({}, add);
clone.d = 20;

console.log(add);
console.log(clone);

const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice();

newArray[1] = "adadadad";
console.log(newArray);
console.log(oldArray);

// Оператор разворота 
// Spread operatot ECMA6

const video = ["youtube", "vimeo", "coub"],
      blogs = ["wordpress", "lj", "blogger"],
      internet = [...video, ...blogs, "facebook"];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ["a", "b"];
const newAarray = [...array];

const q = {
    one: 1,
    two: 2
};
const newObbj = {...q};