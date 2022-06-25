// create a simple calculator
calculator = (a, b, sign) => // a, b are numbers, sign is a string
    typeof a == 'number' // check if a is a number
        && typeof b == 'number' // check if b is a number 
        && ['+', '-', '*', '/'].includes(sign) ? sign == '+' ? a + b : sign == '-' ? a - b : sign == '*' ? a * b : a / b : 'unknown value'; // if a, b and sign are numbers, return the result of the operation