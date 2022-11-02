// Find the sum of the odd numbers within an array, after cubing the initial integers.The function should return undefined if any of the values aren't numbers.

function cubeOdd(arr){
    let sum = 0; // sum of the odd numbers
    for (let i = 0; i < arr.length; i++) { // loop through the array
        if (typeof arr[i] !== 'number') { // if the element is not a number
        return undefined;
        } else if (arr[i] % 2 !== 0) { // if the element is odd
        sum += Math.pow(arr[i], 3); // add the cube of the element to the sum
        }
    }
    return sum;
}