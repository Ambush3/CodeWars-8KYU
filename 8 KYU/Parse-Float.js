// Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.

function parseF(s) {
    return isNaN(parseFloat(s)) ? null : parseFloat(s); // parseFloat(s) returns NaN if s is not a number and returns the number if it is.
}
