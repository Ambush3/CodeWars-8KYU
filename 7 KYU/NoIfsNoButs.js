function noIfsNoButs(a, b) {
    return {
        [a === b]: a + " is equal to " + b,
        [a > b]: a + " is greater than " + b,
        [a < b]: a + " is smaller than " + b
    }[true];
}
