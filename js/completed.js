"use strict";

console.log( NaN || 2 || undefined );               // 2
console.log( NaN && 2 && undefined );               // NaN
console.log( 1 && 2 && 3 );                         // 3
console.log( !1 && 2 || !3 );                       // 2 (false)
console.log( 25 || null && !3 );                    // 25
console.log( NaN || null || !3 || undefined || 5 ); // 5
console.log( NaN || null && !3 && undefined || 5 ); // 5
console.log( 5 === 5 && 3 > 1 || 5 );               // true

// I. 7/8 correct

const hamburger = 3;   
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola || fries === 3 && nuggets) {
    console.log("Done!");
} // "Done!"

// II. correct

/* let hamburger;   
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger || cola || fries === 3 || nuggets) {
    console.log("Done!");
} */ // "Done!"

// III. correct

/* let hamburger;   
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger && cola || fries === 3 && nuggets) {
    console.log("Done!");
} */ // ---

// IV. correct

/* PART 21 

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log("Stay");
} else {
    console.log("Leave");
}

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);

const hamburger = 3;
const fries = 1;
const cola = 0;

console.log(hamburger === 3 && cola  && fries);

console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && 'string');

if (hamburger === 3 && cola === 1 && fries) {
    console.log("Stay");
} else {
    console.log("Leave");
}

const hamburger = 5;
const fries = 0;

if (hamburger && fries) {
    console.log('Full');
} */


/*  PART 20

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
 */

/*  PART 19.1

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

 console.log(personalMovieDB); */