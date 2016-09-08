jamApp.controller('MainController', ['$scope', 'LoginFactory', function($scope, LoginFactory) {
	this.logged = LoginFactory.isLogged;
	

	this.logout = function() {
		LoginFactory.isLogged = false;
		LoginFactory.user = {};
	};
}]);
