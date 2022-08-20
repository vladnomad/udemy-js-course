"use strict";

const numberOfMovies = +prompt("How many movies have you watched?", "");

if (numberOfMovies == null, numberOfMovies.length == 0, numberOfMovies == 0) {
    alert("An error has occured. Please reload the page and provide a number that is equal or greater than 1.");
} else if (numberOfMovies < 10) {
    alert("Lucky! You have yet to explore cinema in its variety!");
} else if (numberOfMovies > 9 && numberOfMovies < 30) {
    alert("Good! You're a movie enthusiast!");
} else if (numberOfMovies > 29) {
    alert("Impressive! You're a cinephile!");
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
    if (a == null) {
        break;
    } 
    if (a.length > 50) {
        alert("The name of the movie should be no longer than 50 characters. Please try again.");
        i--; continue;
    }
    if (a.length < 1) {
        alert("The name of the movie should contain at least 1 character. Please try again.");
        i--; continue;
    }
    const b = prompt("How would you rate it?", "");
    personalMovieDB.movies[a] = b;
    if (b == null) {
        break;
    }
}

console.log(personalMovieDB);