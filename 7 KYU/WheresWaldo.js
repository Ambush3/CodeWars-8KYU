function findWaldo(crowd) {
    // create an array to store all the items
    let array = [],
        waldo = ''
    // loop through the crowd array
    for (let i = 0; i < crowd.length; i++) {
        // loop through each item in the crowd array
        for (let j = 0; j < crowd[i].length; j++) {
            // add each item to the array
            array.push(crowd[i][j])
        }
    }
    // sort the array
    array.sort();
    // loop through the array
    for (let i = 1; i < array.length -1; i++) {
        // if the item is not equal to the item before it, and not equal to the item after it
        if (array[i] != array[i - 1] && array[i] != array[i + 1]){
            // set waldo to the item
            waldo = array[i]
        }
    }
    // loop through the crowd array
    for (let i = 0; i < crowd.length; i++) {
        // loop through each item in the crowd array
        for (let j = 0; j < crowd[i].length; j++) {
            // if the item is equal to waldo
            if (crowd[i][j] === waldo) {
                // return the location of waldo
                return [i, j]
            }
        }
    }
}