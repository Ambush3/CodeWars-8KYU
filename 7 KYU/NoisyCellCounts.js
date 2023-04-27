function cleanedCounts(data) {
    let correctedData = [data[0]];

    for (let i = 1; i < data.length; i++){
        if (data[i] >= correctedData[i - 1]) {
            correctedData.push(data[i]);
        } else {
            correctedData.push(correctedData[i - 1]);
        }   
    }
    return correctedData
}