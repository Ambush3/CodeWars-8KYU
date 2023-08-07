function twoHighest(arr) {
  if (arr.length === 0) {
    return [];
  } else if (arr.length === 1) {
    return [arr[0]];
  } else if (arr.length >= 2) {
    let sorted = arr.sort((a, b) => b - a);
    let uniqueHighest = [...new Set(sorted)];
    let twoHighest = uniqueHighest.slice(0, 2);
    return twoHighest;
  }
}
