// return sum of characters as an integer
uniTotal = (string) => {
    return string.split('').reduce(function (a, b) {
        return a + b.charCodeAt(0);
    }, 0);
}
