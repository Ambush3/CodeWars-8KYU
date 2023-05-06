function firstTooth(t) {
    if (t.length === 1) return 0;

    let maxDifferential = -Infinity;
    let maxDifferentialIndex = -1;
    let multipleMax = false;

    for (let i = 1; i < t.length - 1; i++) {
        let leftDifferential = t[i] - t[i - 1];
        let rightDifferential = t[i] - t[i + 1];
        let totalDifferential = leftDifferential + rightDifferential;

        if (totalDifferential > maxDifferential) {
            maxDifferential = totalDifferential;
            maxDifferentialIndex = i;
            multipleMax = false;
        } else if (totalDifferential === maxDifferential) {
            multipleMax = true;
        }
    }

    return multipleMax ? -1 : maxDifferentialIndex;
}