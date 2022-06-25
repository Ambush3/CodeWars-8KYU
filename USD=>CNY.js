// currency converter 
// Create a function that converts US dollars(USD) to Chinese Yuan(CNY).The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'

// 15  -> '101.25 Chinese Yuan'
// 465 -> '3138.75 Chinese Yuan'
function usdcny(usd) {
    return (usd * 6.78).toFixed(2) + ' Chinese Yuan';
}