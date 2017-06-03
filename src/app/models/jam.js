// Dependencies

var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var jammer = new mongoose.Schema({
	id_user: {type: mongoose.Schema.Types.ObjectId}
});

var jamSchema = new mongoose.Schema({
	name: {type: String, required: true},
	description: String,
	date: {type: Date, required: true},
	hour: String,
	id_admin: {type: mongoose.Schema.Types.ObjectId, ref:'Users'},
	email: String,
	location: {type: String, required: true},
	limit: Number,
	users: [mongoose.Schema.Types.ObjectId]
});

// Return model
module.exports = restful.model('Jams', jamSchema);
