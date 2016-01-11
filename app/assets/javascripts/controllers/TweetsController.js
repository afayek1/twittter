controllers.controller("TweetsController", ['$scope', '$routeParams', '$location', '$resource',
  function($scope, $routeParams, $location, $resource) {
    var Tweet;

    $scope.search = function(keywords) {
      return $location.path("/").search('keywords', keywords);
    };

    $scope.view = function(tweetId) {
      return $location.path("/tweets/" + tweetId);
    };

    Tweet = $resource('/tweets/:tweetId', {
      tweetId: "@id",
      format: 'json'
    });

    if ($routeParams.keywords) {
      Tweet.query({
        keywords: $routeParams.keywords
      }, function(results) {
        return $scope.tweets = results;
      });
    } else {
      return $scope.tweets = [];
    }
  }
  ]);

