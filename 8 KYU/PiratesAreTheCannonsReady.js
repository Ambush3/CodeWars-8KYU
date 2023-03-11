const cannonsReady = (gunners) => {
    let firstValue = null;
    let nayFound = false;

    for (let key in gunners) {
        if (firstValue === null) {
            firstValue = gunners[key];
        } else if (firstValue !== gunners[key]) {
            return 'Shiver me timbers!';
        }

        if (gunners[key] === 'nay') {
            nayFound = true;
        }
    }

    if (nayFound) {
        return 'Shiver me timbers!';
    } else {
        return 'Fire!';
    }
}

