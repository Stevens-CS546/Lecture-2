// Let's make an object!

// You initialize objects with {}, and when you initialize them you can set initial properties:
var myCar = { model: "Jeep", year: "2016" };

// You can access properties through variableName.propertyName
console.log("What is the model of my car?");
console.log(myCar.model);

// You can access also access properties through a string index for the object;
// That is because objects are key-value pairs
var keyToAccess = "year";
console.log("What is at property [" + keyToAccess + "] in my car?");
console.log(myCar[keyToAccess]);

// You may not always know if a property has been set
console.log("Does the car have a rating?");
console.log(myCar.rating);

if (myCar.rating === undefined) {
    // You can add properties after the object has been created
    // Let's set one!
    console.log("Setting default rating of 3-stars")
    myCar.rating = "3-stars";
} else if (myCar.rating === null) {
    console.log("The rating has been set to null, so let's fix that to be 0-stars")
    myCar.rating = "0-stars";
}

console.log("The final verdict on rating is:");
console.log(myCar.rating);

// We can also set complex key names
myCar["miles-per-gallon-highway"] = 21;
console.log("In the highway, the " + myCar.model + " achieves " + myCar["miles-per-gallon-highway"] + "mpg");

// We can use a for-in to traverse over the properties of an object
var other_object = {
    hello: 1,
    world: 2,
    foo: "hello",
    bar: "hello, world"
};

// This will give us keys of 'hello', 'world', 'foo', and 'bar'
for (var key in other_object) {
    var curr_entry = other_object[key];
    console.log(key);
    console.log(curr_entry);
}
