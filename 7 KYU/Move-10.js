function moveTen(s) {
    var result = ''; 
    var charcode = 0;
    for (var i = 0; i < s.length; i++) {
        charcode = (s[i].charCodeAt()) + 10;
        if (charcode > 122) {
            charcode -= 26;
        }
        result += String.fromCharCode(charcode);
    }
    return result;
}