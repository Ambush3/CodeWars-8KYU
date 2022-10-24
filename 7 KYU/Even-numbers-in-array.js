function removeEvenNumbers(array, number) {
    var newArray = [];
    for (var i = array.length - 1; i >= 0; i--) { // start at end of array and work backwards 
        if (array[i] % 2 === 0) { // if the number is even 
        newArray.push(array[i]); // add it to the new array
        }
    }
    // return the new array with the number of even numbers specified in ascending order
    return newArray.slice(0, number).reverse();
}