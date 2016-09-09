jamApp.controller('MainController', ['$scope', 'LoginFactory', function($scope, LoginFactory) {
	this.logged = LoginFactory.isLogged;
	console.log("I'm loaded");
	this.logout = function() {
		// body...
		LoginFactory.user = {};
		LoginFactory.isLogged = false;
		Materialize.toast("Vous vous êtes déconnecté.", 3000);
	}
}]);
