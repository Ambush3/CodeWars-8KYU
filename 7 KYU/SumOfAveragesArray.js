const sumAverage = (arr) => {
    const averages = [];

    for (let i = 0; i < arr.length; i++) {
        const average = arr[i].reduce((a, b) => a + b, 0) / arr[i].length;
        averages.push(average);
    }

    const totalAverage = averages.reduce((a, b) => a + b, 0);

    return Math.floor(totalAverage)
}