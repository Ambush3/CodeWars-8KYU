// Convert miles per imperial gallon to kilometers per liter

function converter(mpg) {
    let LITRES_PER_GALLON = 4.54609188;
    let KILOMETERS_PER_MILE = 1.609344;
    const ratio = KILOMETERS_PER_MILE / LITRES_PER_GALLON;
    return Math.round(100 * mpg * ratio) / 100;
}

