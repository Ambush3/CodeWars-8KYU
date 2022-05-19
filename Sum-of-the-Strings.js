function sumStr(a, b) {
    if (a == '') a = 0; // if a is empty, set it to 0
    if (b == '') b = 0; // if b is empty, set it to 0 
    return (parseInt(a) + parseInt(b)).toString(); // convert to string and return sum of both numbers as string 
}

//P: a, b are integers
//R: sum of both strings
//E: a = '12', b = '34'
//P: Convert a and b into strings and add them together and return the sum