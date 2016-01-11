var twitter = angular.module('twitter', [
  'templates',
  'ngRoute',
  'ngResource',
  'controllers'
  ]);

twitter.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: "index.html",
      controller: 'TweetsController'})
    .when('/tweets/:tweetId', {
      templateUrl: "show.html",
      controller: 'TweetController'
    })
  }]);

var controllers = angular.module('controllers', []);
