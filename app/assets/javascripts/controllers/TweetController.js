controllers.controller("TweetController", ['$scope', '$routeParams', '$resource', function($scope, $routeParams, $resource) {
    var Tweet = $resource('/tweets/:tweetId', {
      tweetId: "@id",
      format: 'json'
    });

    Tweet.get({
      tweetId: $routeParams.tweetId
    }, (function(tweet) {
      return $scope.tweet = tweet;
    }), (function(httpResponse) {
      return $scope.tweet = null;
    }));
  }
]);