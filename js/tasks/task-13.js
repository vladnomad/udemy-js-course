"use strict";

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    let square = 0,
    volume = 0;

    data.shops.forEach((shop => {
        square += shop.width * shop.length;
    }));

    volume = data.height * square;

    if (volume * data.moneyPer1m3 > data.budget) {
        return "Budget is not enough";
    } else {
        return "Budget is enough";    
    }
}