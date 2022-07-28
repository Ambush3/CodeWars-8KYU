// create a function that checks if a string is a number or not 
function isDigit(s) {
    return !isNaN(parseFloat(s)) && isFinite(s);
}