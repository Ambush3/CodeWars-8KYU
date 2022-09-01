// function that returns true if string is isogram and false if not
function isIsogram(str){
    var str = str.toLowerCase(); // convert string to lowercase
    for (var i = 0; i < str.length; i++) { // loop through string
        for (var j = i + 1; j < str.length; j++) { // loop through string again to compare each letter to the first letter 
        if (str[i] === str[j]) { // if the letters are the same return false 
            return false;
        }
        }
    }
    return true; // if no letters are the same return true 
}