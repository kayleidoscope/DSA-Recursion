const countSheep = function(numOfSheep) {
    //Base case
    if (numOfSheep === 0) {
        return "All sheep jumped over the fence.";
    }
    //General case
    let newNum = numOfSheep - 1;
    console.log(`${numOfSheep}: Another sheep jumps over the fence`)
    return countSheep(newNum)
}

let sheep = 3;
console.log(countSheep(sheep))