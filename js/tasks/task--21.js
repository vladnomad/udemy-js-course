"use strict";

const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
    let positiveIncome = data
    .filter(item => item.amount > 0)
    .map(item => item.amount)
    .reduce((sum, current) => sum + current);
    return console.log(positiveIncome);
};

getPositiveIncomeAmount(funds);

const getTotalIncomeAmount = (data) => {
    if (data.every(item => item.amount >= 0)) {
        getPositiveIncomeAmount(data);
    } else {
        let totalIncome = data
        .map(item => item.amount)
        .reduce((sum, current) => sum + current);
        return console.log(totalIncome);
    }
};

getTotalIncomeAmount(funds);