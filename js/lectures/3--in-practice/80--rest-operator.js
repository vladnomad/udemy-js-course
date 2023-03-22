const log = function(a, b, ...rest) {
    console.log(a, b, rest);
}

log("basic", "rest", "operator", "usage");

// function calcOrDouble(number, basis) {
function calcOrDouble(number, basis = 5) {
    // basis = basis || 5;
    console.log(number * basis);
}

// calcOrDouble(3, 5);
calcOrDouble(3);