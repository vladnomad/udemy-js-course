"use strict";

// 1st task: My take

let family1 = ['Peter', 'Ann', 'Alex', 'Linda'],
    arr = family1.toString();

function showFamily(arr) {
    if (arr.length === 0) {
        return "There are nobody in the family";
    } else { 
        let array = "Family consists of: " + arr,
            result = array.replace(/,/g, " ");
        return result;
    }
}

showFamily(family1);

// 1st task: Solution

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = '';

    arr.length === 0 ? str = 'There are nobody in the family' : str = 'Family consists of: ';

    arr.forEach(member => { str += `${member} `; });

    return str;
}

showFamily(family);

// 2nd task

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(city => {console.log(city.toLowerCase());});
}

standardizeStrings(favoriteCities);
