var app = angular.module("WishList", ["ngRoute", "tech.wishlist", "otherTech.wishlist"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            redirectTo: "/wishlist"
        })
        .otherwise({
            redirectTo: "/wishlist"
        })
});