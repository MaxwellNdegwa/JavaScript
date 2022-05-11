//in built number functions

//tostring() number as input and returns as string
var num1 = 10;
var num2 = 92;
console.log(num1.toString()) 
console.log(num2.toString()) 

//parseInt() string numeral as input and reurns as number
var strNum1 = "10";
var x = 'Men'
console.group(parseInt(strNum1));
console.group(parseInt(x)); //since men is not a number and when it tries to convert it to a number it cannot, so it returns not a number(NaN)

//parseFloat string numeral as input and return a floating number
console.log(parseFloat(strNum1))
console.log(parseFloat(x)) // returns NaN since parseFloat cannot convert men to a floating number

//toFixed() takes floating number and rounds off to an integer or given position
var strFloat = 87.677847;
console.log(strFloat.toFixed())
console.log(strFloat.toFixed(2)) // rounds off to 2 d.p
console.log(strFloat.toFixed(10)) // rounds off to 10 d.p

