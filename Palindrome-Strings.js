// Check if string is a palindrome
// Identifies the a number is a palindrome
function isPalindrome(line) {
    return ('' + line) === ('' + line).split('').reverse().join('')
}
