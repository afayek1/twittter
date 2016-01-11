var controllers, twitter, tweets;
twitter = angular.module('twitter', ['templates', 'ngRoute', 'controllers']);
twitter.config([
  '$routeProvider', function($routeProvider) {
    return $routeProvider.when('/', {
      templateUrl: "index.html",
      controller: 'HomeController'
    });
  }
]);

tweets = [
  {
    id: 1,
    text: 'Baked Potato w/ Cheese'
  }, {
    id: 2,
    text: 'Garlic Mashed Potatoes'
  }, {
    id: 3,
    text: 'Potatoes Au Gratin'
  }, {
    id: 4,
    text: 'Baked Brussel Sprouts'
  }
];

controllers = angular.module('controllers', []);
controllers.controller("HomeController", [
  '$scope', '$routeParams', '$location', function($scope, $routeParams, $location) {
    var keywords;
    $scope.search = function(keywords) {
      return $location.path("/").search('keywords', keywords);
    };
    if ($routeParams.keywords) {
      keywords = $routeParams.keywords.toLowerCase();
      return $scope.tweets = tweets.filter(function(tweet) {
        return tweet.text.toLowerCase().indexOf(keywords) !== -1;
      });
    } else {
      return $scope.tweets = [];
    }
  }
]);