function counterEffect(hitCount) {
    const numberString = hitCount.toString();

    const result = [];

    for (const digitStr of numberString) {
        const digit = parseInt(digitStr, 10);

        const subarray = [];
        for (let i = 0; i <= digit; i++) {
            subarray.push(i);
        }

        result.push(subarray);
    }

    return result
}