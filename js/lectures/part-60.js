"use strict";

const arr = [1, 1, 2, 2, 4, 5, 6, 5],
      arrNames = ["Alex", "Ann", "Henry", "Ann", "Alex"];

const set = new Set(arr),
      setNames = new Set(arrNames);

setNames.add("Ivan")
        .add("Ann");

console.log(set);
console.log(setNames);

// set.delete(value);
// set.has(value);
// set.clear();
// set.size();

for (let value of set) console.log(value);

setNames.forEach((value, valueAgain, set) => {
    console.log(value, valueAgain);
});

// set.values();
// set.keys();
// set.entries();

/* function unique(arr) {
    return Array.from(new Set(arr));
}   

console.log(unique(arr)); */