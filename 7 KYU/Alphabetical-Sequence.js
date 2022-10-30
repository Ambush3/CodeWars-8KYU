function alphaSeq(str) {
    let sorted = str.toLowerCase().split('').sort(); // split string into array, sort array alphabetically and join back into string
    let repeating = sorted.map(v => v.charCodeAt() - 96); // map each letter to its position in the alphabet 
    return sorted.map((v, i) => v.repeat(repeating[i]).slice(0, 1).toUpperCase() +  // repeat each letter by its position in the alphabet and capitalize the first letter of each word
        v.repeat(repeating[i]).slice(1)).join(','); // join the array into a string with commas 
}