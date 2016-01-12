controllers.controller("TweetsController", ['$scope', '$routeParams', '$location', '$resource', 'Tweet',
  function($scope, $routeParams, $location, $resource, Tweet) {

    if ($routeParams.keywords) {
      Tweet.query({keywords: $routeParams.keywords},
        function(results) {
          return $scope.tweets = results;
        });
    } else {
      Tweet.query({}, function(results) {
        return $scope.tweets = results;
      });
    }

    $scope.search = function(keywords) {
      return $location.path("/").search('keywords', keywords);
    };

    $scope.view = function(tweetId) {
      return $location.path("/tweets/" + tweetId);
    };

    $scope.newTweet = function() {
      return $location.path('/tweets/new');
    }

    $scope.edit = function(tweetId) {
      return $location.path('/tweets/' + tweetId + '/edit');
    };


    $scope.delete = function(tweetId) {
      Tweet.destroy({ tweetId: tweetId });
      $scope.tweets = Tweet.query();
    };
  }]);

