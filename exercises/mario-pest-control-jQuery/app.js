$(document).ready(app);

function app() {
    $(".baddie-image").hide();
    $(".baddie-image").fadeIn(3000);
    $(".baddies-caught").hide();
    $(".total-price").hide();
    $(".overall-price").hide();
    $(".baddies-caught").fadeIn(5000);
    $(".total-price").fadeIn(7000);
    $(".overall-price").fadeIn(5000);
    $(".baddie-image").on("click", function() {
        $(".baddies-caught1").text("Goombas caught: 12");
        $(".baddies-caught2").text("Goombas caught: 7");
        $(".baddies-caught3").text("Goombas caught: 11");
        $(".total-price1").text("Total price: 60 coins");
        $(".total-price2").text("Total price: 56 coins");
        $(".total-price3").text("Total price: 55 coins");
        $(".overall-price").text("Total price: 171 coins");
    })
};