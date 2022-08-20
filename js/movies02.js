"use strict";

const numberOfMovies = +prompt("How many movies have you watched?", "");

if (numberOfMovies !=0 && numberOfMovies < 10) {
    alert("Lucky! You have yet to explore cinema in its variety!");
} else if (numberOfMovies >= 10 && numberOfMovies < 30) {
    alert("Good! You're a movie enthusiast!");
} else if (numberOfMovies >= 30) {
    alert("Impressive! You're a cinephile!");
} else {
    alert("An error has occured. Please reload the page and provide a number that is equal or greater than 1.");
}

const personalMovieDB = {
   count: numberOfMovies,
   movies: {},
   actors: {},
   genres: [],
   private: false
};

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

console.log(personalMovieDB);