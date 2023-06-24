function logs(x, a, b) {
    var logA = Math.log2(a) / Math.log2(x);
    var logB = Math.log2(b) / Math.log2(x);

    var sum = logA + logB;

    return sum
}