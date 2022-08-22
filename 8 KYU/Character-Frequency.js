function charFreq(message) {
    var freq = {};
    for (let i = 0; i < message.length; i++) {
        var character = message.charAt(i);
        if (freq[character]) {
            freq[character]++;
        } else {
            freq[character] = 1;
        }
    }

    return freq;
}

