controllers.controller("TweetController", ['$scope', '$routeParams', '$resource', '$location',
  function($scope, $routeParams, $resource, $location) {
    $scope.back = function() {
      return $location.path('/')
    }

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