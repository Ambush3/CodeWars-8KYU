function maxGap(numbers) {
    numbers.sort((a, b) => a - b);
    return numbers.slice(1).map(function (n, i) { return n - numbers[i]; }).reduce(function (a, b) {
        return Math.max(a, b)
    });
}
