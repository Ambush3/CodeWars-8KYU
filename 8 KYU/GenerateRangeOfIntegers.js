function generateRange(min, max, step) {
    var range = [];
    for (var i = min; i <= max; i += step) {
        range.push(i);
    }
    return range;
}