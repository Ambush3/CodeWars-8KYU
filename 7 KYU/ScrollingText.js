// Make scrolling text
// Return an array of variations of the input string and the characters "scrolling" 

function scrollingText(str) {
    let result = [];
    let currentString = str;
    for (let i = 0; i < str.length; i++) {
        result.push(currentString.toUpperCase());
        currentString = currentString.slice(1) + currentString[0];
    }
    return result
}