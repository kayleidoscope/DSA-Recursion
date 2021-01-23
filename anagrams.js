const numOfAnas = function(word) {
    //Base case
    if (word.length === 1) {
        return 1
    }
    //General case
    let newWord = word.substring(1, word.length)
    return word.length * numOfAnas(newWord)
}

const anagrams = function(word) {
    function makeWords(array) {
        let newWord;
        //Base case
        if (array.length === numOfAnas(word)) {
            array.push(word)
            return array
        }
        //General case
        for (let i = 0; i < word.length; i++) {
            newWord = [word[i]]
            oldWord = word.substring(1, word.length)
            for(let i = 0; i < oldWord.length - 1; i++) {
                newWord = newWord + oldWord[i]
            }
        }
        array.push(newWord)
        return array
    }
    let words = []
    return makeWords(words)
}

console.log(anagrams("abe"))