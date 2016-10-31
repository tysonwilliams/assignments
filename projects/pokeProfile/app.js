var app = angular.module("pokeApp", []);

app.service("pokeService", ["$http", function($http) {
    this.getPoke = function(num) {
        var poke = {};
        
        return $http.get("http://pokeapi.co/api/v1/pokemon/" + num)
        .then(function(response) {
            poke.name = response.data.name;
            poke.attackPower = response.data.attack;
            poke.ability1 = response.data.abilities[0].name;
            poke.ability2 = response.data.abilities[1].name;
            poke.image = "http://www.pokestadium.com/sprites/xy/" + poke.name.toLowerCase() + ".gif";
            return poke;
        });
    };
}]);

app.controller("pokeCtrl", ["$scope", "pokeService", function($scope, pokeService) { 
    $scope.getPokemon = function(num) {
    
        pokeService.getPoke(num)
        .then(function (poke) {
            $scope.poke = poke;
            console.log($scope.poke.image);
        });
    }
}]);