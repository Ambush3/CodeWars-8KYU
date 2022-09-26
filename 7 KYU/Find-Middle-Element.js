// Find the middle element 
function gimme(triplet) {
    let sorted = triplet.slice().sort((a, b) => a - b); // slice to copy the array, sort to sort the array
    return triplet.indexOf(sorted[1]); // return the index of the middle element in the original array
}