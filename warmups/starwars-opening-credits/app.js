var app = angular.module("myApp", []);

app.controller("mainCtrl", ["$scope", "$http", function($scope, $http) {
    $http.get("http://swapi.co/api/films/1/")
        .then(function(response) {
            $scope.credits = response.data.opening_crawl;
    })
}])