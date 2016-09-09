jamApp.controller('MainController', ['$scope', 'LoginFactory', function($scope, LoginFactory) {
	var self = this;
	$scope.$on('loginEvent', function(event, data) {
		self.logged = LoginFactory.isLogged;
		console.log("I'm loaded");
	});
	this.logout = function() {
		// body...
		LoginFactory.user = {};
		LoginFactory.isLogged = false;
		self.logged = LoginFactory.isLogged;
		Materialize.toast("Vous vous êtes déconnecté.", 3000);
	}
}]);
