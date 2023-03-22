"use strict";

/* try {
    console.log("1");
    console.log(a);
    console.log("result");
} catch(error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
} finally {

}

// console.log(a);
console.log("2"); */
try {
    document.querySelector(".active").addEventListener("click", () => {
        console.log("click");
    });
} catch(e) {
    console.log(e);
}

console.log("continue");