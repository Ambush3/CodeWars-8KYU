// Coefficients of quadratic equation
// Return type is a Vector (
// Equation will be the form of ax^2 + bx + c = 0
// Inputs will be integers.
// When x1 == x2, this means the root has the multiplicity of two

quadratic = (x1, x2) => [1, -(x1 + x2), x1 * x2]; // x1 * x2 = -(x1 + x2)