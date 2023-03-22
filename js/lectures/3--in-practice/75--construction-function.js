"use strict";

// const num = new Number(3);
// console.log(num);

// const num = new Function(3);
// console.log(num);

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello, ${this.name}!`)
    };
}

User.prototype.exit = function (name) {
    console.log(`${this.name} has left`);
}

const vlad = new User("Vlad", 30),
      alex = new User("Alex", 20);

alex.exit(); 

vlad.hello();
alex.hello();

console.log(vlad);
console.log(alex);