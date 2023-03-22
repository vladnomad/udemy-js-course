"use strict";

const user = {
    name: "Alex",
    surname: "Smith",
    birthday: "20/04/1993",
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
};

const userMap = new Map(Object.entries(user));
console.log(userMap);

const newUserObject = Object.fromEntries(userMap);
console.log(newUserObject);

// console.log(user);
// console.log(typeof(Object.keys(user)[0]));

const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50}
];

const budget = [5000, 15000, 25000];

const shopsMap = new Map([
    [{paper: 400}, 8000]
]);

shops.forEach((shop, i) => {
    shopsMap.set(shop, budget[i]);
});

/* shopsMap.set(shops[0], 5000)
        .set(shops[1], 15000)
        .set(shops[2], 25000); */

console.log(shopsMap);
console.log(shopsMap.get(shops[0]));
console.log(shopsMap.has(shops[0]));
// shopsMap.delete(key);
// shopsMap.clear();
// shopsMap.size();
// shopsMap.keys();

/* 
const goods = [];
for (let shop of shopsMap.keys()) {
    goods.push(Object.keys(shop)[0]);
}
// console.log(shopsMap.keys());
console.log(goods); 
*/

/* 
for (let price of shopsMap.values()) {
    console.log(price);
} 
*/

/* 
// for (let price of shopsMap.entries()) {
//     console.log(price);
// } 
for (let [shop, price] of shopsMap.entries()) {
    console.log(price, shop);
}  
*/

/* 
shopsMap.forEach((value, key, map) => {
    console.log(key, value);
}); 
*/