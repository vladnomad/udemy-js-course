"use strict";

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Шерлок",
        "Скотт Пилигрим"
    ]
};

const adv = document.querySelectorAll(".promo__adv img"),
      genre = document.querySelector(".promo__genre"),
      bg = document.querySelector(".promo__bg"),
      list = document.querySelector(".promo__interactive-list"),
      listItem = list.querySelectorAll(".promo__interactive-item"),
      menu = document.querySelector(".promo__menu");

/* 
const ad = document.querySelector(".promo__adv"),
      content = document.querySelector(".promo__content");
ad.remove(); 
content.style.width = "100%";
*/
adv.forEach(item => {
    item.remove();
});

menu.style.flexShrink = "0";

genre.textContent = "Драма";

bg.style.backgroundImage = `url("../project/img/bg.jpg")`;

/* 
function getList(movie) {
    let moviesAZ = movie.sort();
    for (let i = 0; i < moviesAZ.length; i++) {
        listItem[i].textContent = `${i + 1}. ${moviesAZ[i]}`;
    }
} 
getList(movieDB.movies);
*/
list.innerHTML = "";

movieDB.movies.sort();
movieDB.movies.forEach((film, i) => {
    list.innerHTML += `
        <li class="promo__interactive-item">${i + 1}. ${film}
            <div class="delete"></div>
        </li>    
    `;
});