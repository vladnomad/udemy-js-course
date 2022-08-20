"use strict";

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

let numberOfMovies;

function start() {
    numberOfMovies = +prompt("How many movies have you watched?", "");

    while (numberOfMovies == "" || numberOfMovies == null || isNaN(numberOfMovies)) {
        numberOfMovies = +prompt("How many movies have you watched?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfMovies,
    movies: {},
    actors: {},
    genres: [],
    private: false
 };

function rememberMyMovies() {
    for (let i = 0; i < numberOfMovies; i++) {
        const a = prompt("What is the name of the movie?", "");
        if (a.length < 1 && a.length > 50) {
            alert("The name of the movie should be from 1 to 50 characters long. Please try again.");
            i--; continue;
        } else if (a == null) {
            break;
        }
        const b = prompt("How would you rate it?", "");
        personalMovieDB.movies[a] = b;
        if (b == null) {
            break;
        }
    }
}

rememberMyMovies();

function detectPersonalLevel() {
    if (numberOfMovies !=0 && numberOfMovies < 10) {
        alert("Lucky! You have yet to explore cinema in its variety!");
    } else if (numberOfMovies >= 10 && numberOfMovies < 30) {
        alert("Good! You're a movie enthusiast!");
    } else if (numberOfMovies >= 30) {
        alert("Impressive! You're a cinephile!");
    } else {
        alert("An error has occured. Please reload the page and provide a number that is equal or greater than 1.");
    }    
}

detectPersonalLevel();

let numberOfGenres;

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`What is your ${i} favourite movie genre?`);
    }
}

writeYourGenres();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);