jamApp.controller('JamController', ['$scope', '$http', '$state', '$stateParams', 'ApiFactory', 'LoginFactory', function($scope, $http, $state, $stateParams, ApiFactory, LoginFactory) {
  var self = this;

  $http.get(ApiFactory.api + 'jams/' + $stateParams.id_jam)
  .then(
    function(response) {
      self.current = response.data;
      console.log(self.current);
      // GET ADMIN
      $http.get(ApiFactory.api + 'users/'+self.current.id_admin).
      then(
        function(response) {
          self.admin = response.data;
        },
        function(err) {
          console.log('Unable to retrieve admin from the api');
        }
      );

      //GET JAMMERS

      $http.get(ApiFactory.api + 'users').
      then(
        function(response) {
          self.jammers = response.data;
          self.jammers = self.jammers.filter(function(elem, index, array) {
            return self.current.users.includes(elem._id);
          });
          console.log(self.jammers);
        },
        function(err) {
          console.log('Unable to retrieve admin from the api');
        }
      );

    },
    function(err) {
      console.log('Unable to retrieve jam from the api');
    });

  this.subscribeJam = function() {
    if (Object.keys(LoginFactory.user).length === 0 && LoginFactory.user.constructor === Object) {
      $state.go('connexion');
    }
    else{

      // ADD USER TO THE JAM
      var obj = {users: self.current.users.concat([LoginFactory.user._id])};
      console.log(self.current.users);
      $http.put(ApiFactory.api+'jams/'+self.current._id, obj)
      .then(
        function(response) {
          Materialize.toast("Vous participez à cette jam !", 3000);
          console.log('User added to jam');
          console.log(response.data);
        },
        function(err) {
          console.log('Unable to put user in the jam');
        }
      );

      // ADD JAM TO THE USER
      var obj2 = {jams: self.current._id}
      $http.put(ApiFactory.api+'users/'+LoginFactory.user._id, obj2)
      .then(
        function(response) {
          Materialize.toast('Vous participez à cette jam !', 3000);
          console.log('Jam added to user');
        },
        function(err) {
          console.log('Unable to put jam into user');
        }
      );
    }
  };
}]);
