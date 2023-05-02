function dominator(arr) {
    const counts = {}; // hash table to count the occurrences of each element

    for (const x of arr) {
        counts[x] = (counts[x] || 0) + 1; // increment count or initialize to 1
    }

    const threshold = arr.length / 2;

    for (const [x, count] of Object.entries(counts)) {
        if (count > threshold) {
            return Number(x); // return the dominator as a number
        }
    }

    return -1; // no dominator found
}