// IF zero is the ending digit, remove it 

noBoringZeros = (n) => +`${n}`.replace(/0+$/, '');