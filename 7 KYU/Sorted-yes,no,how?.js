function isSortedAndHow(array){
    let sorted = array.slice().sort((a,b) => a-b) // ascending order sort 
    if (array.join('') === sorted.join('')) return 'yes, ascending' // if array is equal to sorted array return ascending 
    else if (array.join('') === sorted.reverse().join('')) return 'yes, descending' // if array is equal to sorted array in reverse return descending
    else return 'no' // otherwise return no
}