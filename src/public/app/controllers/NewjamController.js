jamApp.controller('NewjamController', ['$scope', '$http', 'ApiFactory', function($scope, $http, ApiFactory) {
  this.name = '';
  this.description = '';
  this.date = '';
  this.hour = '';
  this.location = '';
  this.limit = '';

  this.addJam = function() {
    // Creating a Jam object with all the right properties filled by the user
    var jam = {
 			name: this.name,
      description: this.description,
      date: this.date,
 			hour: this.hour,
 			location: this.location,
      limit: this.limit
 		};

 		// Sending the object to the API via the POST method

 		$http.post(ApiFactory.api+'jams', jam)
 		.then(function(response){
 			this.response = 'omg you did it !';
 			console.log(this.response);
      
      console.log(response.data._id);
      var id = response.data._id;
      location.href("jam/" + id);
 		}, function(err) {
 			this.response = 'ONOES';
 			console.log(this.response);
 		});
  };
}]);
