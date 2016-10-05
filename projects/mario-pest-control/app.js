var enemy1 = 1;
var enemy2 = 1;
var enemy3 = 1;
var totalPrice = 0;

function gFunction() {
    var goombaAdd = document.getElementById("goombasCaught").innerHTML = enemy1++;
    var goombaPrice = document.getElementById("goombasPrice").innerHTML = goombaAdd * 5;
};

function bFunction() {
    var bobombAdd = document.getElementById("bob-ombsCaught").innerHTML = enemy2++;
    var bobombPrice = document.getElementById("bob-ombsPrice").innerHTML = bobombAdd * 7;
};

function cFunction() {
    var cheepcheepAdd = document.getElementById("cheep-cheepsCaught").innerHTML = enemy3++;   
    var cheepCheepPrice = document.getElementById("cheep-cheepsPrice").innerHTML = cheepcheepAdd * 11;
};

function getTotalPrice() {
    document.getElementById("totalPrice").innerHTML = parseInt(document.getElementById("goombasPrice").innerHTML) + parseInt(document.getElementById("bob-ombsPrice").innerHTML) + parseInt(document.getElementById("cheep-cheepsPrice").innerHTML);
}