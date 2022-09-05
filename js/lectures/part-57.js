"use strict";

const birthday = Symbol("birthday");

const user = {
    name: "Alex",
    surname: "Smith",
    [birthday]: "20/04/2021",
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
};

console.log(Object.getOwnPropertyDescriptor(user, 'name'));

Object.defineProperty(user, "name", {writable: false});
Object.defineProperty(user, "gender", {value: "female"});

console.log(Object.getOwnPropertyDescriptor(user, 'gender'));

// user.name = "Lia";

// Object.defineProperty(user, "birthday", {value: prompt('What is your birth date?'), enumerable: true, configurable: true});

// console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));

Object.defineProperty(user, "showMyPublicData", {enumerable: false});

// console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));

for (let key in user) {
    console.log(key);
}

console.log(Object.getOwnPropertyDescriptor(user, birthday));

Object.defineProperties(user, {
    name: {writable: false},
    surname: {enumerable: false}
});

// writable (true - value can be edited)
// enumerable (true - counted in loops)
// configurable (true - value can deleted or changed)

// Through defineProperty all descriptors are set to false

