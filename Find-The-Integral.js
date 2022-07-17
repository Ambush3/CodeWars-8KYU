// add one to the exponent
// divide the coefficient by that new number 
// output should be a string
// coefficient and exponent are always a positive integer

function integrate(coefficient, exponent) {
    let exp = exponent + 1
    let coe = coefficient / (exponent + 1)
    return coe + "x^" + exp
}