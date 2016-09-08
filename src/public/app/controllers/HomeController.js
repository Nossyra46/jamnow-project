jamApp.controller('HomeController', ['$scope', '$http', 'ApiFactory', function($scope, $http, ApiFactory) {
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
}]);