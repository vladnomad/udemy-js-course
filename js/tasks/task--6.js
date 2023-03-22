"use strict";

function sayHello(name) {
    return `Hello, ${name}!`;
}

function returnNeighboringNumbers(num) {
    return [num -1, num, num + 1];
}

function getMathResult(num, times) {
    if (typeof(times) !== "number" || times <= 0) {
        return num;
    }

    let str = "";

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
        } else {
            str += `${num * i}---`;
        }
    }

    return str;
}