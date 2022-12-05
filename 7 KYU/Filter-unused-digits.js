// Given a varying number of integer arguments, return the digits that are not present in any of them.

//     Example:

// [12, 34, 56, 78]  => "09"
// [2015, 8, 26]     => "3479"

// Note: the digits in the resulting string should be sorted.


function unusedDigits(...args) {
  let digits = '0123456789';
  let usedDigits = args.join('');
  return digits.replace(new RegExp(`[${usedDigits}]`, 'g'), '');
}