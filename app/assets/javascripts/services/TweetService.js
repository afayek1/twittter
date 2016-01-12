services.factory("Tweet", ['$resource',
  function($resource) {
    return $resource('/api/tweets/:tweetId',
    {
      tweetId: "@id",
      format: 'json'
    },
    {
      'create':  { method: 'POST' },
      'index':   { method: 'GET', isArray: true },
      'show':    { method: 'GET', isArray: false },
      'update':  { method: 'PUT' },
      'destroy': { method: 'DELETE' }
    });
  }])