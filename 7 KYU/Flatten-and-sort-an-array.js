// given a two dimensional array, return a flattened array sorted from lowest to highest

"use strict";

function flattenAndSort(array) {
    return [].concat(...array).sort((a, b) => a - b);
}
