"use strict";

function getTimeFromMinutes(time) {
    if (time < 0 || typeof(time) !== "number" || !Number.isInteger(time)) {
        return "Error, check the data";
    }

    let hours = 0;
    let minutes = 0;
    let hoursStr = "";
    let minutesStr = "";

    hours = Math.floor(time / 60);
    minutes = time - (hours * 60); // time % 60

    const hLastDigitStr = String(hours).slice(-1);
    const hLastDigitNum = Number(hLastDigitStr);
    
    /*
    if (hLastDigitNum === 1 && hours !== 11) {
        hoursStr = "час";
    } else if (hLastDigitNum > 1 && hLastDigitNum < 5 && hours !== 12 && hours !== 13 && hours !== 14) {
        hoursStr = "часа";
    } else {
        hoursStr = "часов";
    }

    switch (hours) {
        case 0: 
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    } 

    if (mLastDigitNum === 1 && minutes !== 11) {
        minutesStr = "минута";
    } else if (mLastDigitNum > 1 && mLastDigitNum < 5 && minutes !== 12 && minutes !== 13 && minutes !== 14) {
        minutesStr = "минуты";
    } else {
        minutesStr = "минут";
    }
    */

    if (hLastDigitNum === 1) {
        hoursStr = "hour";
    } else {
        hoursStr = "hours";
    }

    const mLastDigitStr = String(minutes).slice(-1);
    const mLastDigitNum = Number(mLastDigitStr);

    if (mLastDigitNum === 1) {
        minutesStr = "minute";
    } else {
        minutesStr = "minutes";
    }

    return `This is ${hours} ${hoursStr} and ${minutes} ${minutesStr}`;
}

getTimeFromMinutes(10521);

function findMaxNumber(a,b,c,d) {
    if (typeof(a,b,c,d) !== "number" || a,b,c,d === undefined || typeof(a,b,c,d) === "string") {
        return 0;
    } else {
        return Math.max(a,b,c,d);
    }
}

findMaxNumber(8,28,23,26);

/*     let array = [a,b,c,d];
    let numbers = [a/d, b/d, c/d, d/d];
    console.log(numbers);
    for( var i = 0; i < numbers.length; i++){ 
        if ( numbers[i] < 1) { 
            numbers.splice(i, 1); 
            i--;
        }
    }
    console.log(numbers);

    let numbersP = numbers.filter(checkGreater1);
    function checkGreater1(number) {
        return number >= 1;
    }

    console.log(numbersP);

    for (let i = 0; i < numbersP.length; i++) {
        let num = numbersP[i] / numbersP[numbersP.length - 1];
         console.log(i);
        console.log(numbersP[i]);
        console.log(numbersP.length);
        console.log(numbersP[numbersP.length - 1]);
        console.log(num);

        if (num < 1) {
            console.log(i);
            continue;
        }

        console.log(numbersP[i]);

        for (let i = 0; i < array.length; i++) {
            let answer = array[i] 
            
            let array = [a,b,c,d];
            let numbers = [a/d, b/d, c/d, d/d];
            let numbersP = numbers.filter(checkGreater1);
        
            function checkGreater1(number) {
                return number > 1;
            }

            return answer;
        }
    }
    
    
    let w = (a-b) + (a-c) + (a-d);
    let x = (b-a) + (b-c) + (b-d);
    let y = (c-a) + (c-b) + (c-d);
    let z = (d-a) + (d-b) + (d-c);
    let array = [w, x, y, z];
    let newArray = [];
    console.log(array);

    for (let i = 0; i <= array.length; i++) {
        console.log(newArray);
        if (array[i] < 0) {
            newArray = array.slice(i + 1, array.length);
            console.log(newArray);
        } else {
            console.log(newArray);
            continue;
        }
    }
    console.log(newArray); 



     for (let i = 0; i <= array.length; i++) {
        if (array[i] < 0) {
            newArray = array.slice(i + 1, array.length);
        } else {
            i++;
        }
    }
    console.log(newArray); 



     return console.log(array); 
         if (x < 0) {
        array.slice(0);
    } else if (y < 0) {
        array.slice(0);
    } else if (z < 0) {
        array.slice(0);
    } else {
        return console.log(d);
    } 
 */