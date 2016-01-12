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

    $scope.create = function(text) {
      $scope.tweet = {};
      $scope.tweet.text = text;
      var tweet = Tweet.create($scope.tweet);
      $scope.tweets.unshift(tweet);
      $scope.keywords = '';
    }

    $scope.edit = function(tweetId) {
      return $location.path('/tweets/' + tweetId + '/edit');
    };

    $scope.delete = function(tweetId, index) {
      Tweet.destroy({ tweetId: tweetId });
      $scope.tweets.splice(index, 1)
    };
  }]);

