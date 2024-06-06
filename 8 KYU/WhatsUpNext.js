function nextItem(xs, item) {
  let found = false;
  let previous = null;
  
  for (const x of xs) {
    if (found) {
      return x;
    }
    if (x === item) {
      found = true;
    }
    previous = x;
  }
  
  return undefined;
}
