var readline = require("readline-sync");

var add = require("./add");
var div = require("./div");
var expo = require("./expo");
var multi = require("./multi");
var sub = require("./sub");

function nodeCalculator (num1, num2, operation) {
    return operation(num1, num2);
};

console.log(nodeCalculator(2, 3, add));
console.log(nodeCalculator(2, 3, sub));
console.log(nodeCalculator(2, 3, multi));
console.log(nodeCalculator(2, 3, div));
console.log(nodeCalculator(2, 3, expo));