// Dependencies
var express = require('express');
var router = express.Router();

var bcrypt = require('bcryptjs');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;


// Models
var User = require('../models/user.min');
var Jam = require('../models/jam.min');
var Contact = require('../models/contact.min');

// Passport local strategy

passport.use(new localStrategy(
  function(username, password, done){
    User.findOne({username: username}, function(err, user) {
      if (err) {
      	return done(err);
      }
      if(!user) {
      	return done(null, false, {message: "wrong user"});
      }
      if (user.compare_passwords(password)) {
      	return done(null, false, {message: "wrong password"});
      }
      else {
      	console.log('omg you did it !');
      	return done(null, user);
      }
    });
}));

// Session management (I guess)

passport.serializeUser(function(user, cb) {
  cb(null, user._id);
});

passport.deserializeUser(function(id, cb) {
  User.findById(id, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});


// Routes
// user routes
User.methods(['get', 'put', 'post', 'delete']);


User.before('post', hash_password);

User.register(router, '/users');

// jam routes
Jam.methods(['get', 'put', 'post', 'delete']);
Jam.register(router, '/jams');

// contact routes
Contact.methods(['get', 'post']);
Contact.register(router, '/contacts');

// login routes

router.post('/login',
	passport.authenticate('local'),
	function(req, res) {
		console.log('authed !');
    res.send(req.user);
    res.end();
});

// hashing passwords
function hash_password(req, res, next) {
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(req.body.password, salt, function(err, hash) {
	        req.body.password = hash;
	        next();
	    });
	});
};

// Return router

module.exports = router;