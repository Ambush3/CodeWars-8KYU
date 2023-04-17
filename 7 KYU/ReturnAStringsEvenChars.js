function evenChars(str) {
  if (str.length < 2 || str.length > 100) {
    return "invalid string";
  }

  let evenCharsArr = [];

  for (let i = 1; i < str.length; i += 2) {
    evenCharsArr.push(str[i]);
  }

  return evenCharsArr;
}