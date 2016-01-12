controllers.controller("TweetController", [
  '$scope', '$routeParams', '$resource', '$location', 'Tweet', function($scope, $routeParams, $resource, $location, Tweet) {

    if ($routeParams.tweetId) {
      Tweet.get({
        tweetId: $routeParams.tweetId
      }, (function(tweet) {
        return $scope.tweet = tweet;
      }), (function(httpResponse) {
        $scope.tweet = null;
      }));
    } else {
      $scope.tweet = {};
    }

    $scope.back = function() {
      return $location.path("/");
    };

    $scope.edit = function() {
      return $location.path("/tweets/" + $scope.tweet.id + "/edit");
    };

    $scope.cancel = function() {
      if ($scope.tweet.id) {
        return $location.path("/tweets/" + $scope.tweet.id);
      } else {
        return $location.path("/");
      }
    };

    $scope.save = function() {
      if ($scope.tweet.id) {
        return Tweet.update($scope.tweet, (function(updatedTweet) {
          return $location.path("/tweets/" + updatedTweet.id);
        }));
      } else {
        return Tweet.create($scope.tweet, (function(newTweet) {
          return $location.path("/tweets/" + newTweet.id);
        }));
      }
    };

    return $scope["delete"] = function() {
      $scope.tweet.$delete();
      return $scope.back();
    };
  }
]);