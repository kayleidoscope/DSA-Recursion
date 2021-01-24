let ticks = 0

const powerCalculator = function (number, exponent) {
    //Base case
    if (exponent <= 0) {
        ticks++;
        return "Exponent should be >= 0."
    } else if (exponent === 1) {
        ticks++;
        return number
    }
    //General case
    let newExponent = exponent - 1;
    ticks++
    console.log({ticks})
    return number * powerCalculator(number, newExponent);
}

console.log(powerCalculator(2, 100))