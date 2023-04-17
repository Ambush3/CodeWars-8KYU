function smallEnough(a, limit){
  const greater = (char) => char <= limit;
  return a.every(greater)
}