var array1 = [1, 2, 5];
var array2 = [1, 2, 8, 9, 10];

var uniqueArray = function () {
    //var array = this;
    var newArray = [];
    var regex = /[1-9]/gi;
    for (var i = 0; i < array2.length; i++) {
        //if array1 [any index] !== array2 [any index] then push to newArray
        ourIndex = array1[i].indexOf(array2)
        if (array1[i].indexOf(array2) < 0) {
            newArray.push(array2[i]);
            newArray.push(array1[i]);
        }
    }
    console.log(newArray);
}

uniqueArray();