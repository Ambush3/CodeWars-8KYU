function numObj(s){
  const charCodeArr = [];

  for (let i = 0; i < s.length; i++) {
    const num = s[i];
    const charCode = String.fromCharCode(num);
    const keyValuePair = { [num]: charCode };
    charCodeArr.push(keyValuePair);
  }
  return charCodeArr
}