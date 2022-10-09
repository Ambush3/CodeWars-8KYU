// You are given a string of letters and an array of numbers.
// The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
// After each removal the size of the string decreases (there is no empty space).
// Return the only letter left.

function lastSurvivor(letters, coords) {
    letters = letters.split(""); // split the string into an array of letters
    for (let i = 0; i < coords.length; i++) { // loop through the array of coordinates
        letters.splice(coords[i], 1); // remove the letter at the current coordinate
    }
    return letters.join(""); // join the array of letters back into a string
}