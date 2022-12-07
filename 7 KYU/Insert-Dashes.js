function insertDash(num) {
    var numArray = num.toString().split('').map(Number) // convert the number to a string, split it into an array, and convert each item in the array to a number
    var result = [] // create an empty array to store the result

    for (var i = 0; i < numArray.length; i++) { // for each number in the array
        if (numArray[i] % 2 !== 0 && numArray[i + 1] % 2 !== 0) { // if the number is odd and the next number is odd
            result.push(numArray[i]) // push the number to the result array
            result.push('-') // push a dash to the result array
        }
        else {
            result.push(numArray[i]) // push the number to the result array
        }
    }
    if (result[result.length - 1] == '-') result.pop() // if the last item in the result array is a dash, remove it
    return result.join("") // return the result array as a string
}