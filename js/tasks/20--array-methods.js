"use strict";

const films = [
    {
        name: 'Through a Glass Darkly',
        rating: 10
    },
    {
        name: 'Red Desert',
        rating: 8
    },
    {
        name: 'Le Chat',
        rating: 7
    },
    {
        name: '4:44 Last Day on Earth',
        rating: 4
    }
];

function showGoodFilms(arr) {
    return arr.filter(item => item.rating >= 8);
}

showGoodFilms(films);

function showListOfFilms(arr) {
    const listOfFilms = arr.map(item => item.name)
    .reduce((sum, current) => `${sum}, ${current}`);
    return listOfFilms.toString();
}

showListOfFilms(films);

function setFilmsIds(arr) {
    // arr.forEach((item, i) => {
    return arr.map((item, i) => {
        item.id = i;
        return item;
    });
}

setFilmsIds(films);

const transformedArray = setFilmsIds(films);

function checkFilms(arr) {
    return arr.every(item => item.id || item.id === 0);
}

checkFilms(transformedArray);