const factorial = function(number) {
    //Base case
    if (number === 1) {
        return 1;
    }
    let newNum = number - 1;
    return number * factorial(newNum)
}

console.log(factorial(4))