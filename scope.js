// Scope in JavaScript
//======================

// In JavaScript, scope is based off of functions; child functions have access to variables in 
// their parent functions, as well

function addOne(starting_value) {
    // x is only available inside this function, and any functions in a child scope
    var x = starting_value;

    function doTheWork() {
        // this has access to x, because this is a child function; child functions
        // can access parent variables, because of functional scoping
        return ++x;
    }

    doTheWork();

    return x;
}

console.log("let's add one to 3");
console.log(addOne(3));

// In JavaScript, declarations are also hoisted to the top of the function
// That means that anything you may declare is put at the top of the 
// function declaration (although, variables are not initialized)
// so that you may use their names 

function addOne_v2(starting_value) {
    // x is only available inside this function, and any functions in a child scope
    var x = starting_value;

    // because the function doTheWork is declared, it's technically run at the start of the function before 
    // x is assigned a starting_value
    doTheWork();

    function doTheWork() {
        // this has access to x, because this is a child function; child functions
        // can access parent variables, because of functional scoping
        return ++x;
    }

    return x;
}

console.log("let's add one to 3");
console.log(addOne_v2(3));

// We can leverage functional scoping to prevent global scope pollution using 
// an Immediately Invoked Function Evaluation (IIFE)

// Before, we talked about anonymous functions; those were functions that had no name
// we can use anonymous functions in order to create a private scope and prevent variable naming collisions

// Notice that we have parenthesis around the anonymous function, and then after it.
// The anonymous function is declared, and then the parenthesis allow JavaScript to treat 
// that anonymous functon as the _value_ as the reuslt of the operations inside the parenthesis
// Then, you immediately call that function with the second set of parenthesis. 

(function() {
    var x = 2;

    console.log(x);

    return x + 2;
})();

// x is hidden from the global scope, so we don't have to worry about name collisions!

// We can pass variables into the IIFE
(function(log_this) {
    console.log(log_this);

    if (typeof log_this === "string") {
        console.log("log_this is a string");
    } else if (typeof log_this === "number") {
        console.log("log_this is a number");
    } else if (typeof log_this === "boolean") {
        console.log("log_this is a boolean");
    } else if (typeof log_this === "object") {
        console.log("log_this is an object");
    } else if (typeof log_this === "function") {
        console.log("log_this is a function!");
    } else if (typeof log_this === "undefined") {
        console.log("log_this is undefined! It doesn't exists!");
    } else {
        console.log("log_this is null!");
    }

})('foo');

