var goomba = 0;
var bobomb = 0;
var cheep = 0;

var goombaPrice = 5;
var bobombPrice = 7;
var cheepPrice = 11;

var totalGoombaPrice = 0;
var totalBobombPrice = 0;
var totalCheepPrice = 0;

function updatePrice() {
    $("#totalPrice").html(totalGoombaPrice + totalBobombPrice + totalCheepPrice);
}

$("#goombaClick").click(function() {
    goomba++;
    totalGoombaPrice = goomba * goombaPrice;
    $("#goombasCaught").html(goomba);
    $("#goombasPrice").html(totalGoombaPrice);
    updatePrice();
    $("#mario").get(0).play();
})

$("#bobombClick").click(function() {
    bobomb++;
    totalBobombPrice= bobomb * bobombPrice;
    $("#bob-ombsCaught").html(bobomb);
    $("#bob-ombsPrice").html(totalBobombPrice);
    updatePrice();
    $("#mario").get(0).play();
})
    
$("#cheepClick").click(function() {
    cheep++;
    totalCheepPrice = cheep * cheepPrice;
    $("#cheep-cheepsCaught").html(cheep);
    $("#cheep-cheepsPrice").html(totalCheepPrice);
    updatePrice();
    $("#mario").get(0).play();
})

$(".btn").click(function() {
    $("body").toggleClass("body2");
    $("button").toggleClass("button2");
    if ($(this).text() == "Night mode") { 
     $(this).text("Day mode"); 
  } else { 
     $(this).text("Night mode"); 
  }; 
});