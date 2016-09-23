jamApp.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

	// Default route
	$urlRouterProvider.otherwise('/');

	// ROUTES

	$stateProvider
	.state('home',  {
		url: "/",
		templateUrl: "../views/pages/home.html",
		params: {
			message: null,
			error: null
		},
		controller: 'HomeController',
		controllerAs: 'homeCtrl'
	})
	.state('jam',  {
		url: "/jam/:id_jam",
		templateUrl: "../views/pages/jam.html"
	})
	.state('newjam',  {
		url: "/newjam",
		templateUrl: "../views/pages/newjam.html"
	})

	.state('joinjam',  {
		url: "/joinjam",
		templateUrl: "../views/pages/joinjam.html"
	})

	.state('legal',  {
		url: "/legal",
		templateUrl: "../views/pages/legal.html"
	})
	.state('profil',  {
		url: "/profil/:id_user",
		templateUrl: "../views/pages/profil.html"
	})
	.state('confidentialite',  {
		url: "/confidentialite",
		templateUrl: "../views/pages/confidentialite.html"
	})
	.state('contact',  {
		url: "/contact",
		templateUrl: "../views/pages/contact.html"
	})
	.state('connexion', {
		url: "/connexion",
		templateUrl: "../views/pages/connexion.html"
	})
	.state('inscription',  {
		url: "/inscription",
		templateUrl: "../views/pages/inscription.html"
	})
	.state('inscription.idform',  {
		url: "/idform",
		templateUrl: "../views/pages/inscription1_form.html"
	})
	.state('inscription.form',  {
		url: "/form",
		templateUrl: "../views/pages/inscription2_form.html"
	})
	.state('inscription.confirmation',  {
		url: "/confirmation",
		templateUrl: "../views/pages/inscription3_confirmation.html"
	});

}]);
