// Given an array of integers, remove the smallest value.Do not mutate the original array / list.If there are multiple elements with the same value, remove the one with a lower index.If you get an empty array / list, return an empty array / list.

function removeSmallest(numbers){
    let min = Math.min(...numbers); // find the smallest number
    let index = numbers.indexOf(min); // find the index of the smallest number
    let result = numbers.slice(); // slice the array to make a copy
    result.splice(index, 1); // remove the smallest number
    return result; // return the result
}