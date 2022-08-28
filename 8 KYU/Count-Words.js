    // Function have to count words and not spaces.You have to be sure that you doing it right
    // Empty string has no words.
    // String with spaces around should be trimmed.
    // Non - whitespace(ex.breakspace, unicode chars) should be treated as a delimiter
    // Doublecheck that words with chars like -, ', ` are counted right.


function countWords(str) {
    return str.split(/\s/).filter(a => a).length;
}