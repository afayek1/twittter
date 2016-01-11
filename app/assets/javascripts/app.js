var twitter = angular.module('twitter', ['templates', 'ngRoute', 'ngResource', 'controllers']);

twitter.config([
  '$routeProvider', function($routeProvider) {
    return $routeProvider.when('/', {
      templateUrl: "index.html",
      controller: 'TweetsController'
    });
  }
  ]);

var controllers = angular.module('controllers', []);
