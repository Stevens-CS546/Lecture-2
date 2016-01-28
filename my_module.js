// We will be creating a quick module that will return two functions: divideByTen and multiplyByTen

// Let's setup an object
var myModuleToExport = {};

myModuleToExport.divideByTen = function (numerator) {
    return numerator / 10;
};

myModuleToExport.multiplyByTen = function (baseNumber) {
    return baseNumber * 10;
};

// We then set this to be our export
module.exports = myModuleToExport;
