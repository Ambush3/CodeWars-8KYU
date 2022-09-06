// if characters are uppercase in string, return its index
var capitals = function(word) {
    let uppercase = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) {
            uppercase.push(i);
        }
    } return uppercase;
}