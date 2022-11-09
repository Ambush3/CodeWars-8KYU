// find the elements that have a pair of either positive or negative numbers
// return the element that doesnt have a pair
function findPairs(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]; // 1 2 3 4 5 6 7 8 9 10
        let pair = num * -1; // find the pair of the number by multiplying by -1 
        if (arr.indexOf(pair) === -1) { // if the pair is not in the array return the number that doesnt have a pair
            result = num;
        }
    }
    return result;
}