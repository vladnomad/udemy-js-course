"use strict";

const obj = new Object();

const options = {
    name: "test",
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: "red"
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border);

/*
console.log(Object.keys(options).length);

console.log(options["colors"]["border"]);

delete options.name;

console.log(options);
 */
let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === "object") {
        for (let i in options[key]) {
            console.log(`Property ${i} has a value of ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Property ${key} has a value of ${options[key]}`);
        counter++;
    }
}
console.log(counter);


// PART 33


/* 
arr.pop();

arr.push(10);

console.log(arr);
 */

const arr = [0, 1, 2, 3, 6, 8];

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} inside the array ${arr}`);
});

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
}

const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join("; "));

const array = [20, 13, 3, 31, 64, 8];
array.sort(compareNum);
console.log(array);

function compareNum(a, b) {
    return a - b;
}