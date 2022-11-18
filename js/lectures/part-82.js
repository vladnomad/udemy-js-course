"use strict"

const person = {
    name: "John",
    tel: "+774445544",
    parents: {
        mother: "Emily",
        father: "Anthony"
    }
};

// console.log(JSON.stringify(person));
// console.log(JSON.parse(JSON.stringify(person)));

const clone = JSON.parse(JSON.stringify(person));

clone.parents.mother = "Ann";

console.log(person);
console.log(clone);