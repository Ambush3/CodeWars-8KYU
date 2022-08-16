function arrayDiff(a, b) {
    return a.filter(function(i) { // filter function to remove items from array a that are also in array b
        return b.indexOf(i) < 0; // b.indexOf(i) returns -1 if i is not in b
    });
}