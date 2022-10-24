// One of the common ways of representing color is the RGB color model, in which the Red, Green, and Blue primary colors of light are added together in various ways to reproduce a broad array of colors.

// One of the ways to determine brightness of a color is to find the value V of the alternative HSV(Hue, Saturation, Value) color model.Value is defined as the largest component of a color:

// V = max(R, G, B)
// You are given a list of colors in 6 - digit hexidecimal notation #RRGGBB.Return the brightest of these colors!

// For example,
// brightest(["#001000", "#000000"]) == "#001000"
// brightest(["#ABCDEF", "#123456"]) == "#ABCDEF"
// If there are multiple brightest colors, return the first one:

// brightest(["#00FF00", "#FFFF00", "#01130F"]) == "#00FF00"
// Note that both input and output should use upper case for characters A, B, C, D, E, F

function brightest(colors) {
    let max = 0; // max value of the color
    let result = ''; // result color string
    for (let color of colors) { // loop through the colors
        let r = parseInt(color.slice(1, 3), 16); // get the red value
        let g = parseInt(color.slice(3, 5), 16); // get the green value
        let b = parseInt(color.slice(5, 7), 16); // get the blue value
        let v = Math.max(r, g, b); // get the value of the color
        if (v > max) { // if the value is greater than the max value
            max = v; // set the max value to the value
            result = color; // set the result to the color
        }
    }
    return result; // return the result
}