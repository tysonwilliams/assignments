var app = angular.module("myApp");

app.controller("homeCtrl", ["$scope", function($scope) {
    $scope.thisPage = "Home Page";
}])