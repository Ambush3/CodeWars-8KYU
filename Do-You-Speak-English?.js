// Given a string of arbitrary length with any ascii characters.Write a function to determine whether the string contains the whole word "English".

// Upper or lower case letter does not matter-- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.

spEng = sentence => {
    return sentence.toLowerCase().includes("english");
}