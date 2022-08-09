// return a cascading subset of the given array
function eachCons(array, n) {
    const results = []; // array to hold results
    for (let i = 0; i < array.length - n + 1; i++) { // iterate over the array with a window of size n (n+1)
        results.push(array.slice(i, i + n)) // push the window to the results array (i.e. the subset)
    }
    return results
}