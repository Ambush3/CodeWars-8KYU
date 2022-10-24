function duplicates(array){
    let count = 0;
    let obj = {};
    for(let i = 0; i < array.length; i++){ // loop through array and add each element to object
        if(obj[array[i]]){ // if element already exists in object
        obj[array[i]]++; // increment value 
        } else { // if element does not exist in object
        obj[array[i]] = 1; // add element to object with value of 1
        }
    }
    for(let key in obj){ 
        if(obj[key] > 1){ // if value is greater than 1 
        count += Math.floor(obj[key]/2); // add the number of pairs to count 
        } 
    } 
    return count; 
}