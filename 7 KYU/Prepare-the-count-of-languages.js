function countLanguages(list) {
  let result = {};
  list.forEach((dev) => {
    if (result[dev.language]) {
      result[dev.language] += 1;
    } else {
      result[dev.language] = 1;
    }
  });
  return result;
}