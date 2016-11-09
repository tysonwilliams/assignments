var app = angular.module("BountyApp", []);

// Make bounty service to create, update, delete, and get bounties
app.service("BountyService", ["$http", function ($http) {
    //Get bounties function
    this.getBounties = function () {
        return $http.get("http://localhost:8000/bounties")
            .then(function (response) {
                return response.data;
            });
    };
    //New bounty function
    this.newBounty = function (bounty) {
        return $http.post("http://localhost:8000/bounties", bounty)
            .then(function (response) {
                return response.data;
            });
    };
    //Update bounty function
    this.updateBounty = function (bounty) {
        return $http.put("http://localhost:8000/bounties/:bountyId", bounty)
            .then(function (response) {
            return response.data;
        });
    };
    //Delete bounty function
    this.deleteBounty = function (index) {
        return $http.delete("http://localhost:8000/bounties/" + index)
            .then(function (response) {
            return response.data;
        });
    };
}]);

//Make bounty controller
app.controller("BountyCtrl", ["$scope", "BountyService", function ($scope, BountyService) {
    //put bounty data from html form into bounty object for bounty service to use
    $scope.bounty = {};
    $scope.isEmpty = false;
    
    //Bounty request to and response from server
    BountyService.getBounties()
    .then(function (bounties) {
        $scope.bounties = bounties;
    });
    
    //pass bounty service into controller
    $scope.createBounty = function () {
        BountyService.newBounty($scope.bounty)
            .then(function (bounties) {
                $scope.bounties = bounties;
            });
    };
    
    $scope.deleteBounty = function (index) {
        BountyService.deleteBounty(index)
        .then(function (bounties) {
            if(bounties.length === 0) {
                $scope.isEmpty = true;
            };
            $scope.bounties = bounties;
        });
    };
}]);