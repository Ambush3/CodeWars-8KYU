// returns each number to the correct assigned letter
// example 1: a, 2: b, so on
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

var number = function (array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray.push(i + 1 + ": " + array[i]);
    }
    return newArray;
}
