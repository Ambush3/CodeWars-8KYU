// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.


// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".Your function receives one side of the DNA(string, except for Haskell); you need to return the other complementary side.DNA strand is never empty or there is no DNA at all(again, except for Haskell).


// for loop version
function DNAStrand(dna) {
    let dnaArray = dna.split("");
    let result = "";
    for (let i = 0; i < dnaArray.length; i++) {
        if (dnaArray[i] === "A") {
        result += "T";
        } else if (dnaArray[i] === "T") {
        result += "A";
        } else if (dnaArray[i] === "C") {
        result += "G";
        } else if (dnaArray[i] === "G") {
        result += "C";
        }
    }
    return result;
}


// regex version
function DNAStrand(dna) {
    let object = { A: 'T', T: 'A', C: 'G', G: 'C' }
    return dna.replace(/./g, e => object[e])
}
