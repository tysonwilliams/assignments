var app = angular.module("WishList");

app.directive("itemList", function() {
    return {
        restrict: "E",
        $scope: {
            "item": "="
        },
        templateUrl: "directives/wish-items.tpl.html"
    };
});