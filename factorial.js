let ticks = 0;

const factorial = function(number) {
    //Base case
    if (number === 1) {
        ticks++
        console.log({ticks})
        return 1;
    }
    let newNum = number - 1;
    ticks++;
    return number * factorial(newNum)
}

console.log(factorial(40))