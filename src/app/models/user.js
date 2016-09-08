// Dependencies

var restful = require('node-restful');
var mongoose = restful.mongoose;
var bcrypt = require('bcryptjs');

// Schema

var userSchema = new mongoose.Schema({
	username: {type: String, required: true},
	password: {type: String, required: true},
	talent: String,
	interests: [String],
	firstname: String,
	lastname: String,
	email: {type: String, required: true},
	location: String,
	jams: [{type: mongoose.Schema.Types.ObjectId, ref: 'Jam'}]
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