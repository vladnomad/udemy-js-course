"use strict"
/* 
let user = {name: "Vlad"};

// let map = new Map();
let map = new WeakMap();
map.set(user, "data");

// const arr = [user];
user = null;

// console.log(user);
// console.log(arr[0]);
// console.log(map.keys());
// console.log(map.has(user));
console.log(map);
 */

/* 
let cache = new WeakMap();

function cacheUser(user) {
    if (!cache.has(user)) {
        cache.set(user, Date.now());
    }

    return cache.get(user);
}

let james = {name: "James"};
let hugo = {name: "Hugo"};

cacheUser(james);
cacheUser(hugo);

james = null;

console.log(cache.has(james));
console.log(cache.has(hugo)); 
*/

// WeakSet
// add, has, delete

let messages = [
    {text: "Hey", from: "James"},
    {text: "Hi", from: "Hugo"},
    {text: "Hello", from: "John"}
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
// readMessages.add(messages[1]);

readMessages.add(messages[0]);

// console.log(readMessages.has(messages[0]));

messages.shift();

console.log(readMessages.has(messages[0]));
