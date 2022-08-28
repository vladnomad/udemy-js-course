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

// Exercise 2

const baseCurrencies = ['USD', 'EUR'],
      additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    if (arr.length === 0) {
        return "Нет доступных валют";
    }

    let result = `Доступные валюты:\n`;
    arr = arr.filter(element => element !== missingCurr);

    for (let i = 0; i < arr.length; i++) {
        result += `${arr[i]}\n`;
    }
    
    return result;
}
