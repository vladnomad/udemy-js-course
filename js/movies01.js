"use strict";

const numberOfMovies = +prompt('How many movies have you watched?', '');
 
const personalMovieDB = {
   count: numberOfMovies,
   movies: {},
   actors: {},
   genres: [],
   private: false
};

const a = prompt('What is the last movie you have watched?', ''),
     b = prompt('How would you rate it?', ''),
     c = prompt('What is the last movie you have watched?', ''),
     d = prompt('How would you rate it?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);