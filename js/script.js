"use strict";

if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error!');
}

if (num < 49) {
    console.log('Error!');
} else if (num > 100) {
    console.log('Bigger number');
} else {
    console.log('Ok!');
}

(num === 50) ? console.log('Ok!') : console.log('Error!');


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



// const numberOfMovies = +prompt('How many movies have you watched?', '');
 
// const personalMovieDB = {
//    count: numberOfMovies,
//    movies: {},
//    actors: {},
//    genres: [],
//    private: false
//};

// const a = prompt('What is the last movie you have watched?', ''),
//      b = prompt('How would you rate it?', ''),
//      c = prompt('What is the last movie you have watched?', ''),
//      d = prompt('How would you rate it?', '');
//
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);