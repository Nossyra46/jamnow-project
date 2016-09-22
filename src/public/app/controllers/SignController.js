jamApp.controller("SignController", ["$scope", "$http", "$state", "ApiFactory", "LoginFactory", function($scope, $http, $state, ApiFactory, LoginFactory) {
    var self = this;
    this.username = "";
    this.password = "";

    this.name = "";
    this.firstname = "";
    this.email = "";
    this.userid = "";
    this.finalValidation = function() {
        if ("" == self.email){
            Materialize.toast("Email non renseigné", 3000);
        }
        else {
            var newUser = {
                username: n.username,
                password: n.password,
                lastname: n.name,
                firstname: n.firstname,
                email: n.email
            };

            $http.post(ApiFactory.api + "users", newUser)
            .then(
                function(response) {
                    self.userid = response.data._id;
                    $state.go("inscription.confirmation");
                },
                function(err) {
                console.log("Unable to retrieve created user from the database");
            });
        }
    };
    this.credentialsValidation = function() {
        if("" == n.username || "" == n.password) {
            Materialize.toast("Nom d'utilisateur ou mot de passe non renseigné", 3000);
        }
        else {
            $http.get(ApiFactory.api + "users")
            .then(
            function(res) {
                console.log(res.data);
                
                var exists = res.data.some(function(current, index, array) {
                    return current.username == self.username;
                });

                if (exists) {
                    Materialize.toast("Ce nom d'utilisateur est déjà pris :/", 3e3);
                }
                else {
                    $state.go("inscription.form")
                };
            },
            function(err) {
                console.log("Unable to retrieve users from the database");
            });
        }
    };
}]);