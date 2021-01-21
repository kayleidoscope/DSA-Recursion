const powerCalculator = function (number, exponent) {
    //Base case
    if (exponent <= 0) {
        return "Exponent should be >= 0."
    } else if (exponent === 1) {
        return number
    }
    //General case
    let newExponent = exponent - 1;
    return number * powerCalculator(number, newExponent);
}

console.log(powerCalculator(10, 2))