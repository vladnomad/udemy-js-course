"use strict";

let id = Symbol("id");

const obj = {
    "name": "Test",
//  [Symbol("id")]: 1
    [id]: 1,
    getId: function() {
        return this[id];
    }
};

// let id = Symbol("id");
// obj[id] = 1;

console.log(obj);

for (let value in obj) {
    console.log(value);
}

console.log(obj.getId());

// Declared inside
console.log(Object.getOwnPropertySymbols(obj));
console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);

const myAwesomeDB = {
    movies: [],
    actors: [],
    [Symbol("id")]: 123,
    [Symbol.for("id")]: 213
};

// Third party code

myAwesomeDB.id = "321";

console.log(myAwesomeDB.id);
console.log(myAwesomeDB[Symbol.for("id")]);
console.log(myAwesomeDB);