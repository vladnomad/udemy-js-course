"use strict";

if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error!');
}

/* if (num < 49) {
    console.log('Error!');
} else if (num > 100) {
    console.log('Bigger number');
} else {
    console.log('Ok!');
}

(num === 50) ? console.log('Ok!') : console.log('Error!');
 */

const num = 50;

switch (num) {
    case 49:
        console.log('0');
        break;
    case 100:
        console.log('0');
        break;
    case 50:
        console.log('1');
        break;
    default:
        console.log('2');
        break;
}