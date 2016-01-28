// Welcome to strings.js!
// Lines that start with two slashes are comments

// You'll notice that we define all variables with the `var` keyword, rather than a type.
// Traditionally, JavaScript is CamelCased, like the language's name
var myFirstString = "Hello, world!";
console.log(myFirstString);

// We terminate lines with a semicolon.

// You can concatenate strings with the + operator
var mySecondString = "Oh my!"  + " This is a great day to be alive!";
console.log(mySecondString);

var myThirdString = myFirstString + " " + mySecondString;
console.log(myThirdString);

// There are a number of properties and methods attached to the string protoype. Some of them affect the string in place, some do not.
console.log("There are " + myFirstString.length + " characters in the first string");
console.log("You can find the first occurrence of \"is\" in the third string at " + myThirdString.indexOf("is"));

// You can easily take substrings
var subStr = myThirdString.slice(10);
console.log(subStr);

console.log("There are many other methods waiting for you in the wild!");

