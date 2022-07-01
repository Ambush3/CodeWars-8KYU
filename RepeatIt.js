// // return a string that repeats the input string n number of times
// anything other than a string is passed in - return not a string

var repeatIt = function (str, n) {
    if (typeof str !== 'string') {
        return 'Not a string';
    }
    return str.repeat(n);
}