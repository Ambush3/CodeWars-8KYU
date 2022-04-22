// If pedal is even and flower is odd, return true.
// If pedal is odd and flower is even, return true.
// If pedal is odd and flower is odd, return false.

function lovefunc(flower1, flower2) {
    // moment of truth
    if (flower1 % 2 == 0 && flower2 % 2 == 1) {
        return true
    } if (flower1 % 2 == 1 && flower2 % 2 == 0) {
        return true
    } else {
        return false
    }
}