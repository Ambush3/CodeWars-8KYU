// return true if value is NaN
// false if otherwise 
function isNan(val) {
    if (typeof val == 'number') {
        return isNaN(val);
    } else {    
        return false;
    }
}