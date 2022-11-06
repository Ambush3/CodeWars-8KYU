// Given an array / list[] of n integers, find maximum triplet sum in the array Without duplications.

function maxTriSum(numbers){
  let max = numbers.sort((a,b) => b-a).filter((v,i,a) => a.indexOf(v) === i).slice(0,3)
  return max.reduce((a,b) => a+b)
}