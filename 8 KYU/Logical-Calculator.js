// Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

logicalCalc = (arr, op) => !!arr.reduce((prev, curr) => op == 'AND' ? prev && curr : op == 'OR' ? prev || curr : prev ^ curr);