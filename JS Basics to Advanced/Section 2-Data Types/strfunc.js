// string functions

var firstString  = "This is a string for JavaScript string function"

// Return the length of the string - .length
console.log(firstString.length) // calculates the total length of the characters in a string

//finding the location position index of a string inside a string - indexOf("")
console.log(firstString.indexOf("JavaScript"))
console.log(firstString.indexOf("function"))
console.log(firstString.indexOf("This"))
console.log(firstString.indexOf(" "))

//finding the last index of a string
console.log(firstString.lastIndexOf("function"))
console.log(firstString.indexOf("This")) // indexing starts from zero hence the index of the first string is zero.

//Get part of a string - slice(start,end)
console.log(firstString.slice(0,3)) // returns everything in the string from 0 index to the third index
console.log(firstString.slice(21)) /* returns everything in the string from the 21st index to the last index as the end is not specified*/
console.log(firstString.slice(0,-10)) /* returns everything in the string from the first index(0), and excludes the last 10 indexes.*/
console.log(firstString.slice(-10)) // the last 10 string indexes are returned.

//Get substring beggining at the specified location and having the specified length function - substr(startPosNumber, length)
console.log(firstString.substr(21,10))
console.log(firstString.substr(32)) // if the length is not defined, it retuns everything ot the end.




