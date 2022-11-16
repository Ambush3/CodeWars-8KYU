var greet = function (name) {
    if (name === name.toLowerCase()) {
        return `Hello ${name.charAt(0).toUpperCase() + name.slice(1)}!`;
    } else {
        return `Hello ${name.charAt(0) + name.substring(1).toLowerCase()}!`
    }
}