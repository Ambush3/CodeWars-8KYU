function partlist(arr){
    let result = [];
    for (let i = 1; i < arr.length; i++) { // loop through the array starting at index 1
        result.push([arr.slice(0, i).join(' '), arr.slice(i).join(' ')]); 
        // arr.slice(0, i) returns the first i elements of arr
        // then we join them with a space
        // arr.slice(i) returns the rest of the elements of arr
    }
    return result;
}
