var firstNumber = 20.7;
var secondNumber = 30;
var thirdNumber = 2 * firstNumber;

// JavaScript will evaluate parenthesis first, then other operations; there's no Exponent natively, that's a function!
// This is: (5) - 2 * (5) + 10 - 7
var twentyEight = (7 - 2)*(2 + 3) + 10 - 7;

// You can log multiple things at a time!
console.log(firstNumber, secondNumber, thirdNumber, twentyEight);

// you can concatenate strings and numbers together easily:
var myAge = "I am currently " + 23 + " years old";
console.log(myAge);

// There are many functions stored in the Math global object; like console, there is a global variable called Math
console.log(firstNumber + " floored is " + Math.floor(firstNumber));

// There are many more mathematical operations that you can do in the Math object; feel free to look it up -- you'll need it today!

// You also have access to the usual math comparisons

console.log(20 > 30);
console.log(20 >= 20);
console.log(20 < 30);
console.log (30 <= 30);
