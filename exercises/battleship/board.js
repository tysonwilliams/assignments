var readline = require("readline-sync");

var shipArray = makeShipArray();
var userArray = makeUserArray();
var shipsHitCounter = 1;

function isShip() {
    return ((Math.floor(Math.random() * 5) + 1) === 1);
};

function instanceArray() {
    var newInstanceArray = [];
    for (var i = 0; i < 10; i++) {
        newInstanceArray.push(isShip());
    };
    return newInstanceArray;
};

function makeShipArray() {
    var newShipArray = [];
    for (var i = 0; i < 10; i++) {
        newShipArray.push(instanceArray());
    }
    console.log("\n Hidden true/false ship array\n");
    return newShipArray;
};

function userInstanceArray() {
    var newUserInstanceArray = [];
    for (var i = 0; i < 10; i++) {
        newUserInstanceArray.push("~");
    };
    return newUserInstanceArray;
};

function makeUserArray() {
    var newUserViewArray = [];
    for (var i = 0; i < 10; i++) {
        newUserViewArray.push(userInstanceArray());
    }
    return newUserViewArray;
};

function isHit(x, y, shipArray, userArray) {
        if (userArray[y][x] === "X" || userArray[y][x] === "M") {
            console.log("\nYou already guessed this spot! Try again!\n");
        }
        else if (shipArray[y][x]) {
            console.log("\n\tHit number " + shipsHitCounter + "! Here's your updated board.\n"); 
            userArray[y].splice(x, 1, "X");
            return shipsHitCounter++;
        } else {
            console.log("\n\tMiss! Here's your updated board.\n");
            userArray[y].splice(x, 1, "M");
        }
};

function battleIntro () {
    console.log(shipArray);
    readline.question("\nWant to play my crappy version of Battleship? Press Enter to begin. ");
    readline.question("\nGreat! We are going to be playing on a 10 by 10 grid. The 'x' and 'y' coordinates go from 0 - 9. ");
    console.log("\nHere's your battlefield!!! You win when you get 3 hits!!!\n");
    console.log(userArray);
};

function playBattleShip() {
    battleIntro();
    while(shipsHitCounter < 4) {
        var x = readline.question("\nPlease enter the 'x' coordinate here: ");
        var y = readline.question("\nPlease enter the 'y' coordinate here: ");
        isHit(x, y, shipArray, userArray);
        console.log(userArray);
    }
    console.log("\nYou won!!!!\n");
};

function Location() {
    this.isShip = isShip;
    this.instanceArray = instanceArray;
    this.makeShipArray = makeShipArray;
    this.userInstanceArray = userInstanceArray;
    this.makeUserArray = makeUserArray;
    this.isHit = isHit;
    this.battleIntro = battleIntro;
    this.playBattleShip = playBattleShip;
};

module.exports = Location;