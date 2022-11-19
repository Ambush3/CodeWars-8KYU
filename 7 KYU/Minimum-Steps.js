function minimumSteps(numbers, value) {
    let num = numbers.sort((a, b) => a - b);
    let steps = 0, sum = numbers[0];
    while (sum < value && steps < numbers.length - 1) { sum = sum + num[steps + 1]; steps++; }
    return steps;
}