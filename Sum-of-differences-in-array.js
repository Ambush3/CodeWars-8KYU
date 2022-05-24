// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example

// [2, 1, 10]-- > 9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

function sumOfDifferences(arr) {
    return arr.sort((a, b) => b - a).reduce((acc, curr, i) => { // sort in descending order and reduce to get the sum of differences
        if (i === 0) { // if first element, return 0 as there is no previous element to compare 
            return acc; // return 0 as there is no previous element to compare 
        }
        return acc + (curr - arr[i - 1]); // return the sum of differences between consecutive pairs in the array in descending order 
    }, 0);
}