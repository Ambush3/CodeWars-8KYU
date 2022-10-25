// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

function minSum(arr) {
  let sum = 0; // 
  arr.sort((a, b) => a - b); // sort the array in ascending order 
  for (let i = 0; i < arr.length / 2; i++) { // loop through the array by half of its length 
    sum += arr[i] * arr[arr.length - 1 - i]; // add the product of the first and last element to the sum
  }
  return sum;
}