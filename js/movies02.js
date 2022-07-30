const numberOfMovies = +prompt("How many movies have you watched?", "");
 
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
    const b = prompt("How would you rate it?", "");
    personalMovieDB.movies[a] = b;
    if (b == null) {
        break;
    }
}

console.log(personalMovieDB);