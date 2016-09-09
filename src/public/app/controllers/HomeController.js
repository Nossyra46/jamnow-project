jamApp.controller('HomeController', ['$scope', '$http', '$stateParams', 'ApiFactory', function($scope, $http, $stateParams, ApiFactory) {
	// body...
	var self = this;

	$http.get(ApiFactory.api + 'jams').
	then(
		function(res) {
			console.log(res);
			self.jams = res.data;
			console.log(self.jams);
		},
		function(err) {
			// body...
	});

	// TOASTING
	if ($stateParams.message) {
		Materialize.toast($stateParams.message, 4000);
	};
}]);