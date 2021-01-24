let ticks = 0

const countSheep = function(numOfSheep) {
    //Base case
    if (numOfSheep === 0) {
        ticks++;
        return "All sheep jumped over the fence.";
    }
    //General case
    let newNum = numOfSheep - 1;
    console.log(`${numOfSheep}: Another sheep jumps over the fence`)
    ticks++;
    console.log(ticks)
    return countSheep(newNum)
}

console.log(countSheep(30))