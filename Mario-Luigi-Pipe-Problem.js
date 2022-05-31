// Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value(both included).
function pipeFix(numbers) { // numbers is an array of numbers (integers)
    let arr = []; // create an empty array 
    for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) { // loop through the numbers array and push the values to the new array in the order they should be 
        arr.push(i); // push the value to the new array 
    }
    return arr; // return the new array 
}


