jamApp.controller('JamController', ['$scope', '$http', 'ApiFactory', 'LoginFactory', '$stateParams', function($scope, $http, $stateParams, ApiFactory, LoginFactory) {
  $http.get(ApiFactory.api + "jam/"+ $stateParams.id_jam)
  .then(
    function(response) {
      console.log(response);
    },
    function(err) {
      console.log('Unable to retrieve data from the API');
    }
  );
}]);
