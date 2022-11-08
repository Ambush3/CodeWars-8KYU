function arrayLeaders(numbers){
  let arr = []
    for(let i = 0; i < numbers.length; i++){
        let sum = 0
        for(let j = i + 1; j < numbers.length; j++){ // loop through checking if the sum of the numbers to the right is less than the current number
        sum += numbers[j] // add the numbers to the right to the sum
        }
        if(numbers[i] > sum){ // if the current number is greater than the sum of the numbers to the right
        arr.push(numbers[i]) // push the current number to the array
        }
    }
    return arr
}