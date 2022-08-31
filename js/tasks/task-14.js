"use strict";

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Chris', 'Bernard', 'Takesi', 'Sam', 'Zlatan'];

function sortStudentsByGroups(arr) {
    arr.sort();

    let str = "Оставшиеся студенты: ",
        teams = [];

    for (let i = 0; i < arr.length; i++) {
        teams.push(arr.slice(0, 3));
        arr = arr.slice(3, arr.length);
    }

    if (arr.length === 0) {
        str += "-";
        teams.push(str);
    } else {
        str += arr.join(", ");
        teams.push(str);
    }

    return teams;
}

sortStudentsByGroups(students);