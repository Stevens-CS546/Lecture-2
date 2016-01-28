// For good practice, we will wrap our code inside of an IIFE in order to hide variables from the global scope

(function () {
    // Arrays are actually objects as well; there is no special concept of string[], or
    // other typed arrays. An array is an object type, where it's prototype has many methods
    var firstArray = [1, 2, 3];
    var secondArray = [1, "2", false, {}];

    // Arrays are very easy in JavaScript, and used constantly. First, let's look how to iterate over them the oldschool way
    var myArray = [2, 4, 8];

    // We have our for loop
    for (var i = 0; i < myArray.length; i++) {
        var currEntry = myArray[i];
        console.log(currEntry);
    }

    // Our while loop
    var k = 0;
    while (k < myArray.length) {
        var currEntry = myArray[k++];
        console.log(currEntry);
    }

    // Our for-in; this iterates for each key in the array or object
    // For arrays, the key will be the indexes

    for (var key in myArray) {
        var currEntry = myArray[key];
        console.log(key);
        console.log(currEntry);
    }
    
    // Array Methods
    //======================

    var my_newest_array = [5, 10, 15, 20];
    my_newest_array.push(25);

    // Many methods in JavaScript take anonymous functions;
    // this returns all elements in my_newest_array less than 20
    var smallest_values = my_newest_array.filter((function (x) {
        return x < 20;
    })); // [5, 10, 15]
    console.log(smallest_values);

    // This returns a new array with the squares of my_newest_array
    var mapped = my_newest_array.map(function (x) {
        return x * x;
    }); // [25, 100, 225, 400, 625]
    console.log(mapped);

    // We can chain them quite easily for very clean programming
    var smallest_mapped = my_newest_array.filter((function (x) {
        return x < 20;
    })).map(function (x) {
        return x * x;
    }); // [25, 100, 225] 
    console.log(smallest_mapped);
    
    // Reducing allows you to go through the entire array and accumulate a result:
    // The first argument is the function that performs the accumulation;
    // the second, 0, is the initial value
    // 0 will be the first old_total;
    // 5 will be the first curr_val;
    // it will return  0 + 5 = 5; then it will put 5 as old_total, and 10 as curr_val,
    // etc

    var sum_of_array = my_newest_array.reduce(function (old_total, curr_val) {
        return old_total + curr_val;
    }, 0); // 75
    console.log(sum_of_array);

    // return [5, 10, 15, 20, 25, 30, 35, 40]; my_newest_array is not updated
    var even_newer = my_newest_array.concat([30, 35, 40]);
    console.log(even_newer);
    
    var lastNumber = my_newest_array.pop(); // removes last element and returns it; in this case, removes 25 and returns 25
    console.log(lastNumber);
    
    // The forEach allows us to go through every element in the array with ease; even easier than using loops!
    my_newest_array.forEach(function (val) {
        console.log(val);
    });
   
    // Takes a copy of the array, where your new copy has all elements after (and including) index 1
    var all_but_first = my_newest_array.slice(1); //[10, 15, 20]
    console.log(all_but_first);

    // Takes a copy of the array, where your new copy has all elements after (and including) index 2
    var all_but_first_two = my_newest_array.slice(2); // [15, 20]
    console.log(all_but_first_two);

    // Takes all elements after and including index 1, until index 3
    var all_but_first_until_fourth = my_newest_array.slice(1, 3); // [10, 15]
    console.log(all_but_first_until_fourth);
} ())
