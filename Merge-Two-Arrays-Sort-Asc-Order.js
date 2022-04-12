// Merge both arr1 and arr2
// Sort in ascending order after merging 

function mergeArrays(arr1, arr2) {
    if (arr1.length == 0 && arr2.length == 0) {
        return [];
    } else {
        return Array.from(new Set(arr1.concat(arr2))).sort((a, b) => a - b);
    }
}