function adjacentElementsProduct(array) {
  let maxProduct = array[0] * array[1]; // initialize maxProduct to the product of the first two elements
   for (let i = 1; i < array.length; i++) { // start at index 1, since we already have the product of the first two elements  
      product = array[i] * array[i + 1]; // get the product of the current element and the next element 
      if (product > maxProduct) // if the product is greater than the current maxProduct, update maxProduct
         maxProduct = product; // update maxProduct
   }
   return maxProduct; // return the maxProduct
}