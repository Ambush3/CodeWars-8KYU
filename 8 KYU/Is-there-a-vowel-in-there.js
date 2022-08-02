// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels(a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

isVow = a => a.map(x => x === 97 || x === 101 || x === 105 || x === 111 || x === 117 ? String.fromCharCode(x) : x);