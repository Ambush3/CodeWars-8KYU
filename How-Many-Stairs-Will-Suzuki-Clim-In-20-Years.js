// Sum of all stairs logged in a year will be used for estimating the number he might climb in 20
// 20 year estimate = one year total * 20
// stairs = [sunday + monday + tuesday + wednesday + thursday + friday + saturday]
// each day is an array

function stairsIn20(s) {  // s is an array of arrays 
    let stairs = [0, 0, 0, 0, 0, 0, 0]; // initialize stairs array 
    let total = 0; // initialize total 
    for (let i = 0; i < s.length; i++) { // iterate through array of arrays
        stairs[i] = s[i].reduce((a, b) => a + b); // add all values in array 
        total += stairs[i]; // add all values in array 
    }
    return total * 20; // return total * 20
}
