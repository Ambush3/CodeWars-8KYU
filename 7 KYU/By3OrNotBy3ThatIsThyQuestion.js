function divisibleByThree(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += parseInt(str[i]);
  }
  return sum % 3 === 0;
}