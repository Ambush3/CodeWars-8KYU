function switcher(x) {
  const alphabet = ' zyxwvutsrqponmlkjihgfedcba!? '; // 27 characters long and reversed
  return x.map((num) => alphabet[num]).join(''); // map each number to a character and join them
}