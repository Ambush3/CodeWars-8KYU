// Count how many times a vowel shows up in a string

function getTheVowels(word) {
    let vowels = 'aeiou',
        vowelsIndex = 0,
        result = 0;
    for (let index = 0; index < word.length; index++) {
        if (word[index] == vowels[vowelsIndex]) {
            result++
            if (vowelsIndex == 4) {
                vowelsIndex = 0
            } else {
                vowelsIndex++
            }
        }
    }
    return result
}

