"use strict";

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs(personalPlanPeter) {
        let arrayValue = Object.values(personalPlanPeter.skills.languages),
            showAge = `I am ${personalPlanPeter.age} years old`,
            showLang = ` and I speak:`,
            showStr = showAge + showLang;
        //  ` и я владею языками:`
        for (let i = 0; i <= arrayValue.length; i++) {
            if (arrayValue.length <= 0) {
                showStr = showAge;
                return showStr;
            } else if (i == arrayValue.length - 1) {
                showStr += ` ${arrayValue[i].toUpperCase()}`;
                return showStr;
            } else {
                showStr += ` ${arrayValue[i].toUpperCase()}`;
            }
        }
    }

};

function showExperience(personalPlanPeter) {
    return personalPlanPeter.skills.exp;
}

function showProgrammingLangs(personalPlanPeter) {
    let arrayKey = Object.keys(personalPlanPeter.skills.programmingLangs),
        arrayValue = Object.values(personalPlanPeter.skills.programmingLangs),
        result = "";
    
    for (let i = 0; i <= arrayKey.length; i++) {
        if (arrayKey.length <= 0) {
            return result;
        } else if (i == arrayKey.length - 1) {
            result += `${arrayKey[i].toUpperCase()} learning progress is ${arrayValue[i]}\n`;
            return result;
        } else {
            result += `${arrayKey[i].toUpperCase()} learning progress is ${arrayValue[i]}\n`;
        }
    }
}

