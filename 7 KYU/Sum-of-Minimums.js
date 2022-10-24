// find the sum of the minimum values in each row in a nested list
function sumOfMinimums(arr) {
    return arr.reduce((acc, val) => acc + Math.min(...val), 0);
}

    // reduce method iterates over each element in the array
    // the accumulator is the sum of the minimum values
    // the current val is the current row in the array
    // Math.min is called on the current value using the spread syntax
    // the result is added to the accumulator