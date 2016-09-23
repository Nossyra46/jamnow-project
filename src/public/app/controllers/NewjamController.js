jamApp.controller('NewjamController', ['$scope', '$http', '$state', 'ApiFactory', 'LoginFactory', function($scope, $http, $state, ApiFactory, LoginFactory) {
  var self = this;

  this.name = '';
  this.description = '';
  this.date = '';
  this.hour = '';
  this.location = '';
  this.limit = '';
  this.id_admin = LoginFactory.user._id;

  this.addJam = function() {
    // Creating a Jam object with all the right properties filled by the user
    console.log(LoginFactory.user);
    var jam = {
 			name: this.name,
      description: this.description,
      date: this.date,
 			hour: this.hour,
 			location: this.location,
      limit: this.limit,
      id_admin: this.id_admin
 		};

 		// Sending the object to the API via the POST method

 		$http.post(ApiFactory.api+'jams', jam)
 		.then(function(response){
 			this.response = 'omg you did it !';
 			console.log(this.response);
      var id = response.data._id;

      var obj = {jams: id};
      console.log(obj);
      $http.put(ApiFactory.api+'users/'+self.id_admin, obj)
      .then(
        function(response) {
          console.log('Jam added to your jams');
          $state.go('jam',({id_jam: id}));
        },
        function(err) {
          console.log(ApiFactory.api+'users/'+self.id_admin);
          console.log('Unable to add Jam to user');
        }
      );
 		}, function(err) {
 			this.response = 'ONOES';
 			console.log(this.response);
 		});
  };
}]);
