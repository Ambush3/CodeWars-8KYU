function wordSearch(query, seq) {

    var newArray = [];

    for (var i = 0; i < seq.length; i++) {
        var words = seq[i].split(' ');

        for (var j = 0; j < words.length; j++) {
            if (words[j].toLowerCase().includes(query.toLowerCase())) {
                newArray.push(words[j]);
            }
        }
    }

    if (newArray.length === 0) {
        newArray.push('Empty')
    }

    return newArray;
}