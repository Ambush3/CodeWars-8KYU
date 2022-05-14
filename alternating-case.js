// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// altERnaTIng cAsE <=> ALTerNAtiNG CaSe

// Define String.prototype.toAlternatingCase(or a similar function/ method such as to_alternating_case / toAlternatingCase / ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.

String.prototype.toAlternatingCase = function () {
    let str = ''; // create a new string variable 
    for (let i = 0; i < this.length; i++) { // loop through the string 
        if (this[i] == this[i].toLowerCase()) { // if the character is lowercase 
            str += this[i].toUpperCase(); // add the uppercase version of the character to the new string
        } else { // if the character is uppercase
            str += this[i].toLowerCase(); // add the lowercase version of the character to the new string
        }
    }
    return str;

}