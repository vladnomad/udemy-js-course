"use strict";
/* 
const person = {
    name: "John",
    age: 55,

    get userAge() {
        return this.age;
    },

    set userAge(num) {
        this.age = num;
    }
}

console.log(person.userAge = 30);
console.log(person.userAge);
 */


/* 
function User(name, age) {
    this.name = name;
    // this.age = age;
    let userAge = age;

    this.say = function() {
        console.log(`User name: ${this.name}, User age: ${userAge}`);
    }

    this.getAge = function() {
        return userAge;
    }

    this.setAge = function(age) {
        if (typeof age === "number" && age > 0 && age < 110) {
            userAge = age;
        } else {
            console.log("Incorrect value");
        }
    }
}

const john = new User("John", 55);

console.log(john.name);
console.log(john.getAge());

// console.log(john.userAge);
// john.userAge = 30;
// john.name = "Jack";

john.setAge(30);
john.setAge(300); 


john.say(); 
*/

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }   

    #surname = "Locke";
    
    // say() {
    say = () => { 
        // console.log(`User name: ${this.name}, User age: ${this._age}`);
        console.log(`User name: ${this.name} ${this.#surname}, User age: ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === "number" && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log("Incorrect value");
        }
    }
}

const john = new User("John", 55);

/* 
console.log(john._age);
john._age = 99; 
console.log(john._age); 
*/
console.log(john.surname);

john.say(); 