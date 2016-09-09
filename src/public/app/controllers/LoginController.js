jamApp.controller('LoginController', ['$scope', '$http', '$state', 'ApiFactory', 'LoginFactory', function($scope, $http, $state, ApiFactory, LoginFactory){
	
	this.pseudo = "";
	this.password = "";

	this.login = function() {
		var credentials = {
			"username": this.pseudo,
			"password": this.password
		}

		$http.post(ApiFactory.api + 'login', credentials)
		.then(function(res){
			console.log('logged in bro !');
			LoginFactory.user = res.data;
			LoginFactory.isLogged = true;
			$state.reload();
			$state.go('home',({message: "Vous êtes connecté!", error: false}));
		}, function(err) {
			console.log('ONOES');
			Materialize.toast("Nom d'utilisateur ou mot de passe erroné", 3000);
		});
	};
}]);