// There are a few ways to create functions

// This is global because it is in a top-level scope
function myGlobalFunction() {
    console.log("I'm a global function!");
}

myGlobalFunction();

console.log("\n\n=========\n\n");

function printThreeMessages(message1, message2) {
    console.log(message1);
    console.log(message2);
    myGlobalFunction();
}

printThreeMessages("Hello, world!", "I'm in a good mood.");

function printUpToTwoMessages(message1, message2) {
    if (message1) {
        console.log(message1);

        if (message2) {
            console.log(message2);
        }
    }
}

printUpToTwoMessages(null, "Hello");
console.log("Notice how the previous function did not print anything?");
printUpToTwoMessages("I don't have to put in a second argument");

// We try and name our functions as verbosely as possible; this is called DAMP Programming.

// There's another way to use functions; we can store them inside of variables like so!

// We can store functions in variable as well!
// These are anonymous functions; they have no function name
var myFunction = function() {
    console.log("Hello!");
};

var myOtherFunction = function() {
    console.log("world");
};

myFunction();
myOtherFunction();

// Let's take a look at callbacks
// A callback is when your function takes another function, which it will run at some point later

function multiplyByTenAndSendToCallback(baseNumber, callback) {
    var theEndResult = baseNumber * 10;

    // We pass result to the callback
    callback(theEndResult); 
}

// theEndResult is going to be passed over through the result parameter
multiplyByTenAndSendToCallback(25, function(result) {
    console.log("Is the result 250?");
    console.log(result === 250);
});
