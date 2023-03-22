"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "BULLET TRAIN",
            "SHAME",
            "MIDSOMMAR",
            "FOUR ROOMS",
            "MULHOLLAND DRIVE"
        ]
    };
    
    const adv = document.querySelectorAll(".promo__adv img"),
          genre = document.querySelector(".promo__genre"),
          bg = document.querySelector(".promo__bg"),
          list = document.querySelector(".promo__interactive-list"),
          menu = document.querySelector(".promo__menu"),
          addForm = document.querySelector("form.add"),
          addInput = addForm.querySelector(".adding__input"),
          checkbox = addForm.querySelector(`[type="checkbox"]`);

    const deleteAdv = (arg) => {
        arg.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        menu.style.flexShrink = "0";
        genre.textContent = "ACTION";
        bg.style.backgroundImage = `url("../project/img/bt.webp")`;
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1}. ${film}
                    <div class="delete"></div>
                </li>    
            `;
        });

        document.querySelectorAll(".delete").forEach((btn, i) => {
            btn.addEventListener("click", () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);
            });
        });
    }

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newMovie = addInput.value,
            favourite = checkbox.checked;

        if (newMovie) {
            if (newMovie.length > 21) {
                newMovie = `${newMovie.substring(0, 22)}...`;
            }
            if (favourite) {
                console.log("Favourite movie added");
            }
            movieDB.movies.push(newMovie);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, list);
        }

        event.target.reset();
    });

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, list);
});
