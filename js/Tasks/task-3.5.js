"use strict";

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

// PRACTICE 4

    function firstTask() {
        const arr = [3, 5, 8, 16, 20, 23, 50]; // 0, 2, 3, 8, 4, 3, 27
        const result = [];

        for (let i = 0; i < arr.length; i++) {
            result[i] = arr[i];
        }

        console.log(result);
        return result;
    }

    function secondTask() {
        const data = [5, 10, 'Shopping', 20, 'Homework'];

        for (let i = 0; i < data.length; i++) {
            if (typeof(data[i]) === 'number') {
                data[i] = data[i] * 2;
            } else if (typeof(data[i]) === 'string') {
                data[i] = `${data[i]} - done`;
            }
        }

        console.log(data);
        return data;
    }

    function thirdTask() {
        const data = [5, 10, 'Shopping', 20, 'Homework'];
        const result = [];

        for (let i = 1; i <= data.length; i++) {
            result[i - 1] = data[data.length - i];
        }

        console.log(result);
        return data;
    }

// PRACTICE 5

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += ' ';
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += '*';
    }
    result += '\n';
}

console.log(result);