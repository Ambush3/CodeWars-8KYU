// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. 
function solve(arr) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz"; //
    return arr.map(x => x.toLowerCase().split('').filter((y, i) => i == alphabet.indexOf(y)).length); // map through the array, split each word into an array of letters, filter out the letters that match their index in the alphabet, and return the length of the filtered array
};