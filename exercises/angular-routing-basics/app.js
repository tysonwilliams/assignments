var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "home/home.html",
        controller: "homeCtrl"
    }).when("/about", {
        templateUrl: "about/about.html",
        controller: "aboutCtrl"
    }).when("/whyilove", {
        templateUrl: "whyilove/whyilove.html",
        controller: "whyiloveCtrl"
    })
})

app.directive("mikeTheMink", function() {
    return {
        template: '<img src="http://coursework.vschool.io/content/images/2015/06/download.jpg" alt="mike the mink image">'
    }
});