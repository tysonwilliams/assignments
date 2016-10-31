var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider.when("/add", {
        templateUrl: "templates/add.html",
        controller: "sumCtrl"
    }).when("/mult", {
            templateUrl: "templates/mult.html",
            controller: "productCtrl"
    }).when("/divide", {
        templateUrl: "templates/divide.html",
        controller: "divideCtrl"
    }).when("/home", {
        templateUrl: "templates/home.html"
    })
});

app.service("$numberService", function() {
    this.NSsum;
    this.NSproduct;
    this.NSnum1;
    this.NSnum2;
});

app.controller("sumCtrl", ["$scope", "$numberService", function($scope, $numberService) {
    $scope.num1;
    $scope.num2;
    $scope.sum = $numberService.NSsum;
    $scope.addThem = function() {
        $scope.sum = parseInt($scope.num1) + parseInt($scope.num2);
        $numberService.NSsum = $scope.sum;
        console.log($numberService.NSsum);
    }
}]);

app.controller("productCtrl", ["$scope", "$numberService", function($scope, $numberService) {
    $scope.num1;
    $scope.num2;
    $scope.product = $numberService.NSproduct;
    $scope.multiplyThem = function() {
        $scope.product = parseInt($scope.num1) * parseInt($scope.num2);
        $numberService.NSproduct = $scope.product;
        console.log($numberService.NSproduct);
    }
}]);