// You are to write a function that takes a string as it's first paramter. This string will be a string of words.
// You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.
// Once you have the located string you are finally going to multiply by it the third provided paramater, which will also be an interger. You are additionally required to add a hyphen in between each word.

function modifyMultiply (str, loc, num) {
    var arr = str.split(' '); // split the string into an array of words
    var word = arr[loc]; // get the word at the location
    var newStr = ''; // create a new string to hold the new string
    for (var i = 0; i < num; i++) { // loop through the number of times to multiply
    newStr += word + '-'; // add the word and a hyphen to the new string
    }
    return newStr.slice(0, newStr.length - 1); // return the new string without the last hyphen
}