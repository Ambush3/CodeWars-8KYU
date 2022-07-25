// add question mark to end of string unless it already ends in one

function ensureQuestion(s) {
    return s.endsWith('?') ? s : s + '?';
}
