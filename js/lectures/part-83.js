"use strict";

const inputPln = document.querySelector("#pln"),
      inputEur = document.querySelector("#eur");

// inputPln.addEventListener("change")
// out of focus

inputPln.addEventListener("input", () => {
    const request = new XMLHttpRequest();

    // request.open(method, url, async, login, pass);
    request.open("GET", "js/current.json");
    request.setRequestHeader("Content-type", "application/json; charset=utf-8");
    request.send();

    // status *404 0 200 403 -- statusText(); description
    // response *set by programmer -- responseText();
    /* 
       readyState
       0 UNSENT
       1 OPENED
       2 HEADERS_RECEIVED
       3 LOADING
       4 DONE 
    */
    
    // request.addEventListener("readystatechange", () => {
    request.addEventListener("load", () => {
        // if (request.readyState === 4 && request.status === 200) {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputEur.value = (+inputPln.value / data.current.eur).toFixed(2);
        } else {
            inputEur.value = "Something went wrong";
        }
    });
});