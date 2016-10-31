var app = angular.module("clickerApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider.when("/red", {
        templateUrl: "templates/red.html",
        controller: "numCtrl"
    }).when("/blue", {
        templateUrl: "templates/blue.html",
        controller: "numCtrl"
    })
});

app.service("$redService", function() {
    this.count = 100;
    if(this.count <= 0) {
            this.reset();
    }
    this.increment = function() {
        this.count++;
        return this.count;
    }
    this.decrement = function() {
        this.count--;
    }
    this.reset = function() {
        this.count = 100;
    }
});

app.service("$blueService", function() {
    this.count = 100;
    if(this.count <= 0) {
            this.reset();
    }
    this.increment = function() {
        this.count++;
        return this.count;
    }
    this.decrement = function() {
        this.count--;
        return this.count;
    }
    this.reset = function() {
        this.count = 100;
    }
});

app.controller("numCtrl", ["$scope", "$redService", "$blueService", function($scope, RS, BS) {
    $scope.redCount = RS.count;
    $scope.blueCount = BS.count;
    
    $scope.redFunction = function() {
        $scope.redCount = RS.increment();
        $scope.blueCount = BS.decrement();
        console.log($scope.redCount);
    }
    $scope.blueFunction = function() {
        $scope.blueCount = BS.decrement();
        $scope.redCount = RS.increment();
        console.log($scope.blueCount);
    }
    
}]);