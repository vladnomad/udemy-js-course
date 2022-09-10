"use strict";

function deepCount(a) {
    let b = a.length;
    for (let i = 0; i < a.length; i++) {
        if (Array.isArray(a[i])) { 
            b += deepCount(a[i]); 
        }
    }
    return console.log(b);
}

// deepCount([1, 5, 3]);
// deepCount(["1", 5, "3", ["10"]]);
// deepCount([1, 2, [3, 4, [5]]]);
// deepCount([]);
// deepCount([[[[[[[[[]]]]]]]]]);