// Find average of the number in the array
// Return 0 if array is empty
find_average = array => array.length == 0 ? 0 : array.reduce((prev, curr) => prev + curr) / array.length