var twitter = angular.module('twitter', [
  'templates',
  'ngRoute',
  'ngResource',
  'controllers',
  'services'
  ]);

twitter.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: "index.html",
      controller: 'TweetsController'})
    .when('/tweets/new', {
      templateUrl: 'form.html',
      controller: 'TweetController'})
    .when('/tweets/:tweetId', {
      templateUrl: "show.html",
      controller: 'TweetController'})
    .when('/tweets/:tweetId/edit', {
      templateUrl: 'form.html',
      controller: 'TweetController'
    })
  }
]);

twitter.config(['$httpProvider',
  function($httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] =
      $('meta[name=csrf-token]').attr('content');
  }
]);

var services = angular.module('services', ['ngResource']);
var controllers = angular.module('controllers', ['services']);
