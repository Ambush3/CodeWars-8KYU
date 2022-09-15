// Given an array add all the number elements and return the binary equivalent of that sum; to make the code bulletproof anything else than a number should be addeded as 0 since it can't be addeded.
//
// If your language can handle float binaries assume the array won't contain float or doubles.

const arr2bin = arr => arr.reduce((prev, curr) => prev + (typeof curr === 'number' ? curr : 0), 0).toString(2);