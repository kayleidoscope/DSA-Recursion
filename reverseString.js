let ticks = 0;

const reverseString = function(string) {
    //Base case
    if (string.length <= 1) {
        ticks++;
        return string
    }
    ticks++
    console.log({ticks}, string.length)
    return string[string.length - 1] + reverseString(string.slice(0, string.length - 1))
}

// console.log(reverseString("apple"))
console.log(reverseString("pneumonultramicroscopicsilicavolicanosis"))
