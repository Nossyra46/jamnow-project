jamApp.controller("ProfileController", ["$scope", "$http", "$state", "ApiFactory", "LoginFactory", function($scope, $http, $state, ApiFactory, LoginFactory) {
	var self = this;

	this.user = LoginFactory.user;

	
}]);