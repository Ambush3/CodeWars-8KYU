// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(w, h, d) {
    var area = 2 * (w * h + h * d + d * w);
    var volume = w * h * d;
    return [area, volume];
}