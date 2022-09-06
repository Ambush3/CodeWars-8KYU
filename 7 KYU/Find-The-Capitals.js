// if characters are uppercase in string, return its index
var capitals = function(word) {
    let uppercase = []; // create empty array
    for (let i = 0; i < word.length; i++) { // loop through string
        if (word[i] === word[i].toUpperCase()) { // if character is uppercase
            uppercase.push(i); // push index to array
        }
    } return uppercase; // return array
}