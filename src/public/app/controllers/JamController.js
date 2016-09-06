jamApp.controller('JamController', ['$scope', '$http', '$stateParams', 'ApiFactory', function($scope, $http, $stateParams, ApiFactory) {
  $http.get(ApiFactory.api + 'jams/' + $stateParams.id_jam)
  .then(
    function(response) {
      console.log(response.data);
    },
    function(err) {
      // body...
      console.log('Unable to retrieve data from the api');
    }
    );
}]);
