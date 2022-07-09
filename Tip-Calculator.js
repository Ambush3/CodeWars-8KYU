// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:
// Terrible: tip 0 %
// Poor: tip 5 %
// Good: tip 10 %
// Great: tip 15 %
// Excellent: tip 20 %
// The rating is case insensitive(so "great" = "GREAT").If an unrecognized rating is received, then you need to return:
// round to the nearest number

calculateTip = (amount, rating) => (tipScale => tipScale < 0 ? 'Rating not recognised' : Math.ceil(amount * tipScale * .05))
    (['terrible', 'poor', 'good', 'great', 'excellent'].indexOf(rating.toLowerCase()))