function strangeMath(n, k) {
    let sum = [] // array to store the sum of the digits
    for (let i = 0; i <= n; i++) { // loop through the numbers from 0 to n 
        sum.push(i) // push the numbers to the array 
    } sum = sum.sort() // sort the array in ascending order 
    return sum.indexOf(k) // return the index of k in the array
}
