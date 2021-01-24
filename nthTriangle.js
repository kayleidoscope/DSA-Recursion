let ticks = 0;

const nthTriangle = function(number) {
    //Base case
    if (number === 1) {
        ticks++;
        console.log({ticks})
        return number
    }
    let newNumber = number - 1
    ticks++
    return number + nthTriangle(newNumber)
}

// console.log(nthTriangle(1))
// console.log(nthTriangle(2))
// console.log(nthTriangle(3))
// console.log(nthTriangle(4))
// console.log(nthTriangle(10))
// console.log(nthTriangle(50))
// console.log(nthTriangle(100))
// console.log(nthTriangle(500))
console.log(nthTriangle(900))
