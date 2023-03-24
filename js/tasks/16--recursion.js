function factorial(num) {
    if (num <= 1) {
        return 1;
    } else if (Number.isNaN(num) || !Number.isInteger(num)) {
        return "Enter an integer number";
    } else {
        return num * factorial(num - 1);
    }
    // Shorter solution without negative numbers
    // return n ? n * factorial(n - 1) : 1; 
}

factorial(5);
console.log(factorial(5));