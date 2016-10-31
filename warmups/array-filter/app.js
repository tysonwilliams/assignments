Array.prototype.myFilter = function (callback) {
    var array = this;
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if(callback(array[i])) {
            console.log(array[i]);
            newArray.push(array[i]);
        }
    }
   
    return newArray;
};


var numericArray = [8, 3, 4, 32, 1, 9, 3, 5, 42, 56];

var myNewNumberArray = numericArray.myFilter(function(item) {
    return item < 5;
});

var letterArray = ["a", "b", "a"];

var myNewLetterArray = letterArray.myFilter(function(item) {
    return item === "a";
});