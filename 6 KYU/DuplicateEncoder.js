function duplicateEncode(word) {
    const charCounts = {};
    const lowercaseWord = word.toLowerCase();

    for (let i = 0; i < lowercaseWord.length; i++) {
        const char = lowercaseWord[i];
        charCounts[char] = (charCounts[char] || 0) + 1;
    }

    let resultString = '';
    for (let i = 0; i < lowercaseWord.length; i++) {
        const char = lowercaseWord[i];
        if (charCounts[char] > 1) {
            resultString += ')';
        } else {
            resultString += '(';
        }
    }

    return resultString;
}
