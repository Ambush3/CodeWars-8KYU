function heads (array) {
    return array[0]; // this will return the first element of the array
}
 
function tails (array) {
    return array.slice(1); // this will return the array without the first element
}

function inits (array) {
    return array.slice(0, array.length - 1); // this will return the array without the last element
}

function lasts (array) {
    return array[array.length - 1]; // this will return the last element of the array 
}