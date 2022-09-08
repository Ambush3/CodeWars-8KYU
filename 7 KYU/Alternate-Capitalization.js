// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF'].See test cases for more examples.

// The input will be a lowercase string with no spaces.

function capitalize(s) {
    let even = s.split("");
    let odd = s.split("");
    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
        even[i] = even[i].toUpperCase();
        } else {
        odd[i] = odd[i].toUpperCase();
        }
    }
    return [even.join(""), odd.join("")];
}