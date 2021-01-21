const fibonacci = function(number) {
    //Base case
    if (number === 1) {
        return 1
    }
    let newNum = number - 1;

    return newNum + " " + fibonacci(newNum);
}

console.log(fibonacci(7))