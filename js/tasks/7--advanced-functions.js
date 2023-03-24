"use strict";

function calculateVolumeAndArea(edge) {
    if (edge <= 0 || typeof(edge) !== "number" || !Number.isInteger(edge)) {
        return "Error occurred. Provide a positive integer number that is not equal to 0.";
    } 
    
    let volume = edge * edge * edge;
    let area = 6 * (edge * edge);
    
    return `Cube's volume: ${volume}, Cube's area: ${area}`;
}

calculateVolumeAndArea(5);

function getCoupeNumber(seat) {
    if (seat < 0 || typeof(seat) !== "number" || !Number.isInteger(seat)) {
        return "Error. Check if the seat number is entered correctly";
    } else if (seat === 0 || seat > 36) {
        return "There is no such seat";
    } else {
        let coupe = Math.ceil(seat / 4);
        return coupe;
    }
}

getCoupeNumber(36);