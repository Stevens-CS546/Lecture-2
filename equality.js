// JavaScript is truthy; many things can be evaluated as "true-enough"
var actuallyTrue = true;

console.log("Let's check if true, stored in a variable, is true:");
// This will be true, naturally
console.log(actuallyTrue == true);

// But many things, evaluate to false
var actuallyFalse = false;

// The following are both equal to false
console.log("Let's check if false, stored in a variable, is still equal to false:");
console.log(actuallyFalse == false);

console.log("Is 0 equal to false?");
console.log(0 == false);

// You can negate these
console.log("What is !false?");
console.log(!actuallyFalse);

console.log("What is !true?");
console.log(!actuallyTrue);

// At first, you'd think "These will never evaluate as false"
console.log("Is \"\" equal to false?");
console.log("" == false);

console.log("Is null equal to false?");
console.log(null == false);

console.log("Is undefined equal to false?");
console.log(undefined == false);

// However, if you use those values in an if statement, they would all be false!
if ("") {
    console.log("Empty quotes evaluate to true!");
} else {
    console.log("Empty quotes evaluate to false!");
}

if (null) {
    console.log("null evaluates to true!");
} else {
    console.log("null evaluates to false!");
}

if (undefined) {
    console.log("undefined evaluates to true!");
} else {
    console.log("undefined evaluates to false!");
}

// This is because JavaScript undergoes type coercion, which means it will often try and match types up nicely
// This lets you negate non-boolean objects to get booleans!
var wowItsTrue = !"";
console.log("Let's check if !\"\" is true");
console.log(wowItsTrue === true);

console.log("We can negate something to check if it's null");
var checkIfHasValue = null;
if (!checkIfHasValue) {
    console.log("You did not supply a value.");
}

// Anything that is not "", 0, null, or undefined will take the place of false; strings with any number of characters, numbers, and any other data will be 'true'

// In order to get around this issue, you can force objects to be checked for equality by type, as well as value

// This is now false!
console.log("Watch, however, what happens when we use three equal signs; does 0 === false? Does a string === true?")
console.log(0 === false);
console.log("Hello" === true);

// JavaScript also has a shorthand for the equality operator, the ternary operator.

console.log(10 > 20 ? "The condition is true" : "The condition is false");
