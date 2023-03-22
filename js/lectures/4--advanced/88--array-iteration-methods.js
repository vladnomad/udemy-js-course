"use strict";

// filter

const names = ["John", "James", "Hugo", "Benjamin"],
      shortNames = names.filter(name => name.length < 5);

console.log(shortNames);

// map

const answers = ["john", "JAmES", "HuGO", "BenjAmin"],
      result = answers.map(item => item.toLowerCase());

console.log(result);

let data = ["john", "JAmES", "HuGO", "BenjAmin"];
data = data.map(item => item.toUpperCase());

console.log(data);

// every && some

const smth = [4, "eight", "isola"];

console.log(smth.some(item => typeof(item) === "number"));
console.log(smth.every(item => typeof(item) === "number"));

// reduce

const arrStr = ["apple", "pear", "plum", "ananas", "pomegranate"],
      arrNum = [4, 5, 1, 3, 2, 6],
      //  0  4  /  4  5  /  9  1  /  10  3

      resStr = arrStr.reduce((sum, current) => `${sum}, ${current}`);
let resNum = arrNum.reduce((sum, current) => sum + current);

console.log(resStr);
console.log(resNum);

resNum = arrNum.reduce((sum, current) => sum + current, 3);

console.log(resNum);


const obj = {
    john: "person",
    hugo: "person",
    dog: "animal",
    cat: "animal"
}

const newArr = Object.entries(obj)
.filter(item => item[1] === "person")
.map(item => item[0]);

console.log(newArr);