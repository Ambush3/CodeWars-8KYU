// Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

function productArray(numbers){
    let product = 1; // 1 is the identity element for multiplication
    let result = []; // initialize an empty array
    for (let i = 0; i < numbers.length; i++) { // loop through the array
        product *= numbers[i]; // multiply the product by the current element
    }
    for (let i = 0; i < numbers.length; i++) { // loop through the array again
        result.push(product / numbers[i]); // push the product divided by the current element to the result array
    }
    return result; // return the result array
}