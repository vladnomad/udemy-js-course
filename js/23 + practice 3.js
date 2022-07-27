"use strict";

for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
    }
}

// *
// **
// ***
// ****
// *****
// ******

let result ="";
const length = 7;

for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
        result += '*';
    }
    result += '\n';
}

console.log(result);

first: for (let i = 0; i < 3; i++) {
    console.log(`First Level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second Level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) continue first;
            console.log(`Third Level: ${k}`);
        }
    }
}
// HOMEWORK

function firstTask() {
    for (let i = 5; i < 11; i++) {
        console.log(i);
    }
}

function secondTask() {
    main: for (let i = 20; i > 9; i--) {
        console.log(i);
        if (i === 14) {
            break main;
        } 
    }
}

function thirdTask() {
    for (let i = 2; i < 11; i+=2) {
        console.log(i);
    }
}

function fourthTask() {
/* 
    for (let i = 2; i <=16; i++) {
        if (i % 2 === 0) {
            continue;
        } else {
            console.log(i);
        }
    } 
*/

    let i = 2;
    while (i < 16) {
        i++;  
        if (i % 2 === 0) {
            continue;
        } else {
            console.log(i);
        }      
    }
}

function fifthTask() {
    const arrayOfNumbers = [];

    for (let i = 5; i < 11; i++) {
        arrayOfNumbers.push(i);
    }
    
    return arrayOfNumbers;
}