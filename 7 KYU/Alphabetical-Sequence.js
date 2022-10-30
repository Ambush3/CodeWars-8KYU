function alphaSeq(str) {
    let sorted = str.toLowerCase().split('').sort(); // sort the string alphabetically 
    let repeating = sorted.map(v => v.charCodeAt() - 96); // get the number of times each letter repeats 
    return sorted.map((v, i) => v.repeat(repeating[i]).slice(0, 1).toUpperCase() + // get the first letter of each sequence and uppercase it 
        v.repeat(repeating[i]).slice(1)).join(','); // get the rest of the letters and join them with a comma
}