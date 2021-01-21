const nthTriangle = function(number) {
    //Base case
    if (number === 1) {
        return number
    }
    let newNumber = number - 1
    return number + nthTriangle(newNumber)
}

console.log(nthTriangle(1))
console.log(nthTriangle(2))
console.log(nthTriangle(3))
console.log(nthTriangle(4))
console.log(nthTriangle(9))
