// Write a function that checks if a given string(case insensitive) is a palindrome.

function isPalindrome(x) { // x is a string
    x = x.toLowerCase(); // convert to lowercase string
    let newStr = x.split('').reverse().join(''); // reverse string and join into a new string
    if (x === newStr) { // if the two strings are equal, return true 
        return true; // if the two strings are not equal, return false
    } else {
        return false; // if the two strings are not equal, return false
    }
}