angular.module("newsDPedro").factory("movieAPI", function ($http, config) {
    
        var _getMovies = function (id) {
            return $http.get(config.baseUrl + "/movie?shoppingId=" + id);
        };
    
        return {
            getMovies: _getMovies
        };
    });