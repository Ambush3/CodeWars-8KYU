function dbSort(a){
  let num = a.filter(x => typeof x === 'number').sort((a,b) => a - b);
  let str = a.filter(x => typeof x === 'string').sort();
  return num.concat(str);
}



// function dbSort(a){
//   var arr = []
//   var arr1 = []
//   var arr2 = []
//   for (i=0;i<a.length;i++){
//     if (typeof a[i] == "string"){
//       arr1.push(a[i])
//     } else {
//       arr2.push(a[i])
//     }
//   }
//   arr1.sort()
//   arr2.sort((a, b) => a - b)
//   return arr = arr2.concat(arr1)
// }