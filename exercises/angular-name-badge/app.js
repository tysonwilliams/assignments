var app = angular.module("myApp", []);

app.controller("mainCtrl", ["$scope", function($scope) {
    
    $scope.badgeArray = [];
    $scope.createBadge = function() {
        
        $scope.badgeArray.push($scope.badge);
        $scope.badge = {};
    }
}]);