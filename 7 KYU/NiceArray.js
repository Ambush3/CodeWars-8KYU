function isNice(arr){
  for (let i = 0; i < arr.length; i++) {
        if (!(arr.includes(arr[i] - 1) || arr.includes(arr[i] + 1))) {
            return false;
        }
    }
    return true;
}