// If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";
// Arrow function

chromosomeCheck = (sperm) => {
    if (sperm.includes("XX")) {
        return "Congratulations! You're going to have a daughter.";
    } else if (sperm.includes("XY")) {
        return "Congratulations! You're going to have a son.";
    } else {
        return "Congratulations! You're going to have a son.";
    }
}   