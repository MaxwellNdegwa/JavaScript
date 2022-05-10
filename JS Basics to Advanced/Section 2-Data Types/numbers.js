var num1 = 10; //Integer
var num2 = 10.9; //Decimal number
var x = "Maxwell"

// JS has an inbuilt function type of - which when used on variables returns the type of data stored on that variable

//semicolon is optional in JS

console.log(typeof(num1));
console.log(typeof(num2));
console.log(typeof(x));

//Addition
var num3 = 15;
var sum = num1 + num2 + num3;
console.log(sum);

//Subtraction
var diff = num3 - num1;
console.log(diff);
console.log(typeof(diff));

//Multiplication
var mul = num2 * num1;
console.log(mul);

//Division
var div = num3 / num2;
console.log(div);

var divByZero = num3 / 0;
console.log(divByZero);
console.log(typeof(divByZero));

var zeroDivBy = 0 / num3;
console.log(zeroDivBy);

var mulByString = 4 * "A";
console.log(mulByString); // the output will be NaN meaning not a number.
console.log(typeof(mulByString)); // NaN data type is is stored as a number.


