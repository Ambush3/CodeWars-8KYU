// Write a function to get the first elements of asequence.Passing a parameter n(default=1) will return the first n elements of the sequence.

// If n == 0 return an empty sequence[]

function first(arr, n) {
    if (n === undefined) {
        n = 1;
    }
    if (n === 0) {
        return [];
    }
    return arr.slice(0, n);
}
