angular.module('newsDPedro', []);
angular.module("newsDPedro").controller("mainCtrl", function ($scope, movieAPI) {
    var ng = $scope;

    var loadMovies = function () {
        movieAPI.getMovies(1).success(function (data) {
            ng.movies = data;
            ng.featured = data[0];
            ng.movies.shift();
            
            var rating = ng.featured.imdb_rating;
            console.log(rating);
            // ng.getRating = function(rating) {
            //     return new Array(rating);   
            // }

            var movies = data;
            for (var movie = 0; movie < movies.length;movie++) {
                ng.movie = movie;
                ng.genre = movie[8]
                console.log(ng.genre)
            }

        }).error(function (data) {
            ng.message = "Aconteceu um problema: " + data;
        });
    };
    loadMovies();
});
