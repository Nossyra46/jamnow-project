jamApp.controller('JamController', ['$scope', '$http', '$stateParams', 'ApiFactory', function($scope, $http, $stateParams, ApiFactory) {
  var self = this;

  $http.get(ApiFactory.api + 'jams/' + $stateParams.id_jam)
  .then(
    function(response) {
      self.current = response.data;

      $http.get(ApiFactory.api + 'users/'+self.current.id_admin).
      then(
        function(response) {
          self.admin = response.data
        },
        function(err) {
          console.log('Unable to retrieve admin from the api');
        });
    },
    function(err) {
      console.log('Unable to retrieve jam from the api');
    });
}]);
