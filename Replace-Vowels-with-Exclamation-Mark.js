function replace(s) {
    let vowels = "aeiouAEIOU";
    let result = "";
    for (let i = 0; i < s.length; i++) {
        if (vowels.indexOf(s[i]) === -1) {
            result += s[i];
        } else {
            result += "!";
        }
    }
    return result;
} 