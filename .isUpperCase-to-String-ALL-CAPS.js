// Add the isUpperCase method to String to see whether the string is ALL CAPS.

String.prototype.isUpperCase = function () {
    // your code here
    return String(this) === this.toUpperCase();
}