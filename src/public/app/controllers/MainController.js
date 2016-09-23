jamApp.controller('MainController', ['$scope', 'LoginFactory', function($scope, LoginFactory) {
	var self = this;
	$scope.$on('loginEvent', function(event, data) {
		self.logged = LoginFactory.isLogged;
		self.user = LoginFactory.user;
		console.log(self.user._id);
	});
	this.logout = function() {
		// body...
		LoginFactory.user = {};
		self.user = {};
		LoginFactory.isLogged = false;
		self.logged = LoginFactory.isLogged;
		Materialize.toast("Vous vous êtes déconnecté.", 3000);
	}
}]);
