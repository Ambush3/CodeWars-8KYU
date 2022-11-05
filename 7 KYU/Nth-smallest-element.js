// find the nth smallest element in the array

function nthSmallest(arr, n) {
    return arr.sort((a, b) => a - b)[n - 1]; 
    // sort the array in ascending order
    // n - 1 because arrays are zero indexed
}