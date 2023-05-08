function validParentheses(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push('(');
    } else if (str[i] === ')') {
      if (stack.length === 0 || stack.pop() !== '(') {
        return false;
      }
    }
  }

  return stack.length === 0;
}