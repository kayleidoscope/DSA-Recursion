let ticks = 0

const fibonacci = function(number) {
    function doTheThing(sequence) {
        //Base case
        if (sequence.length === number) {
            console.log(sequence)
            ticks++
            console.log({ticks})
            return sequence
        };
        const nextNum =
            (sequence[sequence.length - 1] ?? 1) + (sequence[sequence.length - 2] ?? 0)
        sequence.push(nextNum)
        ticks++;
        doTheThing(sequence)
    }
    ticks++;
    let sequence = []
    return doTheThing(sequence)
}

console.log(fibonacci(900))