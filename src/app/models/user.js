// Dependencies

var restful = require('node-restful');
var mongoose = restful.mongoose;
var bcrypt = require('bcryptjs');

// Schema

var userSchema = new mongoose.Schema({
	username: {type: String, required: true},
	password: {type: String, required: true},
	firstname: String,
	lastname: String,
	talent: {type: String, required: true},
	email: {type: String, required: true},
	location: String,
	jams: {type: [mongoose.Schema.Types.ObjectId], ref: 'Jams', default: []}
});

// comparing passwords

userSchema.methods.compare_passwords = function(pass) {
	var hash = this.password;
	bcrypt.compare(pass, hash, function(err, res) {
    	return res;
	});
};

// Return model
module.exports = restful.model('Users', userSchema);