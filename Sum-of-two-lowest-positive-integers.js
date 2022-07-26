// return the sum of the two smallest integers

function sumTwoSmallestNumbers(numbers) {
    let sort = numbers.sort((a, b) => a - b).slice(0, 2);
    return sort[0] + sort[1];
}