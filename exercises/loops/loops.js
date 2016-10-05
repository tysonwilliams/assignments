var readLine = require("readline-sync");

var phrase = readLine.question("Type a phrase: ")
for (var i = 0; i < phrase.length; i++) {
    console.log(phrase[i]);
}

var char = readLine.question("Type character");
var foundChar = false;
var indexOfChar;

for (var i =0; i < phrase.length; i++) {
    if (phrase[i] === char) {
        foundChar = true;
        indexofChar = i;
        break;
    }
}

if (foundChar) {
    console.log(indexOfChar);
} else {
    console.log("Character not found");
}

var number = readLine.question("Type number")
var number;

while (number !== "42") {
    number = readLine.question("What is the meaning of Life?");
}

console.log("You got it right");

var num;
for (var i = 0; i < 10; i++) {
    num = readLine.question("Enter a number: ");
    if (i === 0 || number < lowest) {
        lowest = num;
    }
}

console.log(lowest);