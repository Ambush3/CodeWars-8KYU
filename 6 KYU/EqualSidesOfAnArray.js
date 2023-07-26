function findEvenIndex(arr) {
    let sum1 = 0;
    let sum2 = arr.reduce((a, b) => a + b, 0);
    let middleIntegerIndex = -1;

    for (let i = 0; i < arr.length; i++) {
        sum2 -= arr[i];

        if (sum1 === sum2) {
            middleIntegerIndex = i;
            break;
        }

        sum1 += arr[i];
    }

    return middleIntegerIndex;
}