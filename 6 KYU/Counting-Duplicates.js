// Count the duplicates
function duplicateCount(text) {
    let nText = text.toLowerCase();
    let obj = {};
    let counter = 0;
    for (let i = 0; i < nText.length; i++) {
        if (!obj[nText[i]]) {
            obj[nText[i]] = 1;
        } else if (obj[nText[i]] < 2) {
            obj[nText[i]] += 1;
            counter++;
        }
    } return counter;
}