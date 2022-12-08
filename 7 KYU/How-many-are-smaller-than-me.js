// loop through the array 
// find all the elements that are smaller than the current element to its right
// return an array where each index is the number of elements smaller than the current element

function smaller(nums) {
    let result = []; // create an empty array
    for (let i = 0; i < nums.length; i++) { // loop through the array
        let count = 0; // create a counter variable
        for (let j = i + 1; j < nums.length; j++) { // loop through the array again starting at the next index 
            if (nums[i] > nums[j]) { // if the current element is greater than the next element
                count++; // increment the counter
            }
        }
        result.push(count); // push the counter to the result array
    }
    return result; 
}