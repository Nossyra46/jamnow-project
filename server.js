// Dependencies
var express = require("express");
var app = express();
var path = require("path");

var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');

var session = require('express-session');

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Passport init
app.use(session({secret: 'I like trains', resave: false, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());

// MongoDB
if(process.env.NODE_ENV == 'production') {
  // mongoose.createConnection('mongodb://client:jamnow@ds033996.mlab.com:33996/db_jamnow');
  // mongoose.createConnection(process.env.PROD_MONGODB);
  mongoose.connect(process.env.PROD_MONGODB);

}
else {
  mongoose.connect('mongodb://localhost/db_jamnow');
  // mongoose.connect('mongodb://client:jamnow@ds033996.mlab.com:33996/db_jamnow');
};

db = mongoose.connection;

// DYnamically serving our RESTful api I guess ?
app.use('/api', require(__dirname + '/dist/app/routes/api.min.js'));


// Statically serving Angular application
app.use(express.static(__dirname + "/dist/public"));
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + "/dist/public/views/index.html"));
});

// Start server
app.listen(process.env.PORT || 7070);
