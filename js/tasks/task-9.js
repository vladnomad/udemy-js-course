"use strict";

function fib(n) {
    if (typeof(n) !== "number" || n === undefined || typeof(n) === "string" || !Number.isInteger(n)) {
        return "";
    }
    let array = [];

    for (let i = 0; i < n; i++) {
        if (i === 0 || i === 1) {
            array.push(i);
            continue;
        } else {
            let sequence = array[i - 2] + array[i - 1];
            array.push(sequence);
        }
    }
}

fib(7);

// String
/* 
function fib(n) {
    if (typeof(n) !== "number" || n === undefined || typeof(n) === "string" || !Number.isInteger(n)) {
        return "";
    }
    let array = [];

    for (let i = 0; i < n; i++) {
        if (i === 0 || i === 1) {
            array.push(i);
            continue;
        } else {
            let sequence = array[i - 2] + array[i - 1];
            array.push(sequence);
        }
    }
    let string = array.toString();
    let result = string.replace(/,/g,' ');
    return result;
}
 */