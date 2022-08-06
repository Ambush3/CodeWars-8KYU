// check if number starts with 1, 2, or 3 with regex
// Basic regex tasks.Write a function that takes in a numeric code of any length.The function should check if the code begins with 1, 2, or 3 and return true if so.Return false otherwise. 
// regex: /^[1-3]/

function validateCode(code) {
    let regex = /^[1-3]/;
    if (regex.test(code)) {
        return true;
    } else {
        return false;
    }
}
