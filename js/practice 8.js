"use strict";

function getTimeFromMinutes(time) {
    if (time < 0 || typeof(time) !== "number" || !Number.isInteger(time)) {
        return "Ошибка, проверьте данные";
    }

    let hours = 0;
    let minutes = 0;
    let hoursStr = "";
    let minutesStr = "";

    hours = Math.floor(time / 60);
    minutes = time - (hours * 60);

    const hLastDigitStr = String(hours).slice(-1);
    const hLastDigitNum = Number(hLastDigitStr);

    if (hLastDigitNum === 1 && hours !== 11) {
        hoursStr = "час";
    } else if (hLastDigitNum > 1 && hLastDigitNum < 5 && hours !== 12 && hours !== 13 && hours !== 14) {
        hoursStr = "часа";
    } else {
        hoursStr = "часов";
    }

    const mLastDigitStr = String(minutes).slice(-1);
    const mLastDigitNum = Number(mLastDigitStr);

    if (mLastDigitNum === 1 && minutes !== 11) {
        minutesStr = "минута";
    } else if (mLastDigitNum > 1 && mLastDigitNum < 5 && minutes !== 12 && minutes !== 13 && minutes !== 14) {
        minutesStr = "минуты";
    } else {
        minutesStr = "минут";
    }

    return `Это ${hours} ${hoursStr} и ${minutes} ${minutesStr}`;
}

getTimeFromMinutes(10521);


// WORK IN PROGRESS >>>

function findMaxNumber(a,b,c,d) {
    if (typeof(a,b,c,d) !== "number" || a,b,c,d === undefined || typeof(a,b,c,d) === "string") {
        return console.log(0);
    }
    let w = (a-b) + (a-c) + (a-d);
    let x = (b-a) + (b-c) + (b-d);
    let y = (c-a) + (c-b) + (c-d);
    let z = (d-a) + (d-b) + (d-c);
    let array = [w, x, y, z];
    let newArray = [];
    console.log(array);

    for (let i = 0; i <= array.length; i++) {
        if (array[i] < 0) {
            newArray = array.slice(i + 1, array.length);
        } else {
            i++;
        }
    }
    console.log(newArray);



    /* return console.log(array); */
    /*     if (x < 0) {
        array.slice(0);
    } else if (y < 0) {
        array.slice(0);
    } else if (z < 0) {
        array.slice(0);
    } else {
        return console.log(d);
    } */
} 

findMaxNumber(10,8,23,4);