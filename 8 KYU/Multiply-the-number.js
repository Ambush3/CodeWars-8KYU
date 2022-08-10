// multiply each number by 5 raised to the number of digits
// multiply(3)==15 // 3 * 5¹
// multiply(10)==250 // 10 * 5²
// multiply(200)==25000 // 200 * 5³
// multiply(0)==0 // 0 * 5¹
// multiply(-3)==-15 // -3 * 5¹
multiply = (number) => number * 5 ** String(Math.abs(number)).length;