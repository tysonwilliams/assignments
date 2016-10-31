var app = angular.module("myApp", "ngRoute" []);

app.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "templates/add.html",
        controller: "AddController"
    })
})




app.controller("mainCtrl", ["$scope", function($scope) {
    
    $scope.uglyArray = [];
    $scope.uglyFunction = function() {
        $scope.uglyArray.push($scope.ugly);
    }
}]);