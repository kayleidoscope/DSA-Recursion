const stringSplitter = function(string, separator) {
    //Base case
    if (!string.includes(separator)) {
        return string
    }
    //General case
    let separatorIndex = string.indexOf(separator)
    let firstBit = string.substring(0, separatorIndex)
    let theRest = string.substring(separatorIndex + 1, string.length)
    return firstBit + " " + stringSplitter(theRest, separator)
}

console.log(stringSplitter("01/19/1999", "/"))