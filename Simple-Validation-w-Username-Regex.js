// Simple validation of a username with regex
// lowercase letters, numbers, underscore
// length between 4 and 16 characters

function validateUsr(username) {
    var re = /^[a-z0-9_]{4,16}$/;
    return re.test(username);
}