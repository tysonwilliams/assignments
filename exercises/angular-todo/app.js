var app = angular.module("myApp", []);

app.controller("mainCtrl", ["$scope", "$http", function($scope, $http) {
    
    $scope.newPost = function() {
        $http.post("http://api.vschool.io/tysonwilliams/todo/", $scope.todo)
        .then(function(res) {
        $scope.todoList.push(res.data)
        $scope.todo = "";
        });
    };
    
    $scope.editPost = function() {
        
    }
    
    $scope.savePost = function(id, index) {
        $http.put("http://api.vschool.io/tysonwilliams/todo/" + id);
    };
    
    $scope.deletePost = function(id, index) {
      $scope.todoList.splice(index, 1); $http.delete("http://api.vschool.io/tysonwilliams/todo/" + id);
    };
    
    $http.get("http://api.vschool.io/tysonwilliams/todo/")
        .then(function(res) {
        $scope.todoList = res.data;
    });

}]);