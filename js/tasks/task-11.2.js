"use strict";

const someString = 'This is some strange string';
let result = '';

function reverse(str) {
    if (typeof str !== "string") {
        return "Ошибка!";
    }    
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result; 
}

// Самый оптимальный вариант решения
// return str.split('').reverse().join('');

reverse(someString);

// Exercise 2 -- WORK IN PROGRESS

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {

}
