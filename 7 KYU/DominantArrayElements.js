function solve(arr){
    let dominant = [];
    let max = arr[arr.length-1];
    dominant.push(max);
    for (let i = arr.length-2; i >= 0; i--){
        if (arr[i] > max) {
            dominant.push(arr[i]);
            max = arr[i];
        }
    }
    dominant.reverse();
    return dominant;
};


// Create a dominant array that holds the elements that are greater than all of those to the right
// We start with max being assigned to the last element in the array
// We push max right away in the dominant array
// Loop through the array, starting at second to last number moving right to left
// If the current number is greater than max, then we push it to the dominant array
// Update max to the current integer
// Going through until we have found all dominant numbers