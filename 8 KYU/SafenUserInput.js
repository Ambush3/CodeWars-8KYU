// replace the characters >, <, ", and & with the correct characters 
// O(n)

function htmlspecialchars(formData) {
    return formData.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}