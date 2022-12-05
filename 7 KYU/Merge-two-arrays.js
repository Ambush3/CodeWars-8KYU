function mergeArrays(a, b) {
    var newArray = [];
    for (var i = 0; i < a.length || i < b.length; i++) {
        if (i < a.length) { newArray.push(a[i]); }
        if (i < b.length) { newArray.push(b[i]); }
    }
    return newArray;
}