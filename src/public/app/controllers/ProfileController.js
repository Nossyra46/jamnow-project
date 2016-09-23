jamApp.controller("ProfileController", ["$scope", "$http", "$state", "ApiFactory", "LoginFactory", '$stateParams', function($scope, $http, $state, ApiFactory, LoginFactory, $stateParams) {
	var self = this;

	$http.get(ApiFactory.api+ 'users/'+$stateParams.id_user)
	.then(
		function function_name(response) {
			self.user = response.data;
		},
		function function_name(err) {
			console.log('Unable to retrieve user from api');
		}
	);

	console.log(this.user);
	console.log(LoginFactory.user);

	// GET NEXT JAMS I PARTICIPATE IN

	$http.get(ApiFactory.api + 'jams')
	.then(
		function(response) {
			self.jams = response.data;
			self.jams = self.jams.filter(function(elem, index, array) {
				return self.user.jams.includes(elem._id) || elem.id_admin == self.user._id;
			})
		},
		function(err) {
			console.log('Unable to retrieve my jams');
		}
	);
}]);