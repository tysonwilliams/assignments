var app = angular.module("", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
    .when("/tech", {
        controller: "techCtrl",
        templateUrl: "tech/tech.tpl.html"
    })
});