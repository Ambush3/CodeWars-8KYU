// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

// Return as a number.

function divCon(x){
  let num = 0
  let str = 0
  for(let i = 0; i < x.length; i++){
    if(typeof x[i] === 'string'){
      str += parseInt(x[i])
    } else {
      num += x[i]
    }
  }
  return num - str
}