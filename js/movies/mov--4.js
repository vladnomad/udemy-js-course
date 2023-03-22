"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        personalMovieDB.count = +prompt("How many movies have you watched?", "");
    
        while (personalMovieDB.count === "" || personalMovieDB.count === null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How many movies have you watched?", "");
        }
    },
    rememberMyMovies: function() {
        for (let i = 0; i < personalMovieDB.count; i++) {
            const a = prompt("What is the name of the movie?", "").trim();
            if (a.length < 1 && a.length > 50) {
                alert("The name of the movie should be from 1 to 50 characters long. Please try again.");
                i--; continue;
            } else if (a === null) {
                break;
            }
            const b = prompt("How would you rate it?", "");
            personalMovieDB.movies[a] = b;
            if (b === null) {
                break;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count !=0 && personalMovieDB.count < 10) {
            alert("Lucky! You have yet to explore cinema in its variety!");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert("Good! You're a movie enthusiast!");
        } else if (personalMovieDB.count >= 30) {
            alert("Impressive! You're a cinephile!");
        } else {
            alert("An error has occured. Please reload the page and provide a number that is equal or greater than 1.");
        }    
    },
    writeYourGenres: function() {
        /*      
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`What is your ${i} favourite movie genre?`);

            if (genre == null || genre === "") {
                console.log("You didn't enter any genre or entered incorrect data");
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        } 
        */
        for (let i = 1; i < 2; i++) {
            let genres = prompt("Enter your favourite movie genres separated by commas").toLowerCase();

            if (genres === "" || genres == null) {
                console.log("You didn't enter any genre or entered incorrect data");
                i--;
            } else {
                personalMovieDB.genres = genres.split(", ");
                personalMovieDB.genres.sort();
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Favourite genre ${i + 1} is ${item}`);
        });
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    }
 };