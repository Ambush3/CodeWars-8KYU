// Count how many valleys are in the string
// input: FFUDDDFFUDFFUU

function countingValleys(s) {
    let count = 0;
    let valleys = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === 'U'){
            count++;
        } else if(s[i] === 'D'){
            count--;
        }
        if(count === 0 && s[i] === 'U'){
            valleys++;
        }
    }
    return valleys;
}

