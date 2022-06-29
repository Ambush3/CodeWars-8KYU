//  return the sum of lowercase characters in a string 
function lowercaseCount(str) {
    return str.length - str.replace(/[a-z]/g, '').length;
}