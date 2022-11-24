function getMissingElement(superImportantArray) {
    var sum = 0;
    var N = superImportantArray.length + 1;
    for (i = 0; i < N - 1; ++i) {
        sum += superImportantArray[i];
    }
    return (N - 1) * N / 2 - sum;
}