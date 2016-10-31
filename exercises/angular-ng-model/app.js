var app = angular.module("main", []);

app.controller("myCtrl", ["$scope", function($scope) {
    $scope.addAll = function() {
        $scope.addEverything = $scope.name + " " + $scope.age + " " + $scope.date
    };
}])