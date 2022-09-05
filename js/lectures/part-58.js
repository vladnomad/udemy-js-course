"use strict";

const user = {
    name: "Alex",
    surname: "Smith",
    birthday: "20/04/1993",
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
};

for (const key in user) {
    console.log(user[key]);
}
/* for (const key of user) {
    console.log(user[key]);
} */

const arr = ["b", "a", "c"];
Array.prototype.someMethod = function() {};

console.dir(arr);

for (const key of arr) {
    console.log(key);
}
/* for (const key of arr) {
    console.log(key);
} */

const str = "string";

/* for (const key in str) {
    console.log(str[key]);
} */
for (const key of str) {
    console.log(key);
}

const salaries = {
    john: 500,
    ivan: 1000,
    ann: 5000,
    sayHello: function() {
        console.log("Hello");
    }
};

salaries[Symbol.iterator] = function() {
    return {
        current: this.john,
        last: this.ann,

        next() {
            if (this.current < this.last) {
                this.current += 500;
                return {done: false, value: this.current};
            } else {
                return {done: true};
            }
        //  {done: true, value: 123}
        }
    };
};

const iterator = salaries[Symbol.iterator]();
console.log(iterator.next());

for (let res of salaries) {
    console.log(res);
}