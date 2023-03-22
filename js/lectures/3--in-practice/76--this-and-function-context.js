"use strict";

// 1. Behaviour differs if strict mode is on/off
// Off: Window, On: undefined

/* function showThis() {
    console.log(this);
}

showThis();

function exampleThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        // return this.a + this.b;
        return a + b;
    }

    console.log(sum());
}

exampleThis(4, 5); */

// 2. Context for object methods is the object itself

/* const obj = {
    a: 20,
    b: 15,
    sum: function () {
        console.log(this); // Parent object

        function shout() {
            console.log(this);
        }
        shout(); // undefined

    }
};

obj.sum(); */

// 3. Context for constructor functions and classes is the new object

/* function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log("Hello, " + this.name);
    };
}

let vlad = new User("Vlad", 30); */

// 4. Assign context manually: call, apply, bind

/* // function sayName() {
function sayName(surname) {
    console.log(this);
    // console.log(this.name);
    console.log(this.name + " " + surname);
}

const user = {
    name: "John"
};

// sayName.call(user);
sayName.call(user, "Lock");
// sayName.apply(user);
sayName.apply(user, ["Lock"]);

function count(num) {
    return this*num;
}

const doubleNum = count.bind(2);
console.log(doubleNum(3));
console.log(doubleNum(13)); */

// Practice

const btn = document.querySelector("button");

btn.addEventListener("click", function() {
    console.log(this);
}); // this = event.target (element)

/* btn.addEventListener("click", function() {
    this.style.backgroundColor = "red";
}); */

// Context of an arrow function = context of its parent

const object = {
    num: 5,
    showNumber: function() {
        const show = () => {
            // console.log(this);
            console.log(this.num);
        }

        show();
    }
};

object.showNumber();

// const double = (a) => {
//     return a * 2;
// }; 

// const double = (a, b) => a * 2;
const double = a => a * 2;

console.log(double(4));


btn.addEventListener("click", () => {
    this.style.backgroundColor = "red";
});

btn.addEventListener("click", (e) => {
    e.target.style.backgroundColor = "red";
});