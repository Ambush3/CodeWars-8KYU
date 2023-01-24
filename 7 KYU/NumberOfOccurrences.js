Array.prototype.numberOfOccurrences = function(elem) {
  let count = 0;
  for (let i = 0; i < this.length; i++) {
    if (this[i] === elem) {
      count++;
    }
  }
  return count;
}