var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// MongoDB Connection
var mongoose = require('mongoose');
mongoose.connect("mongodb://kurtbradd:hackitmac15@ds045614.mongolab.com:45614/eventdb")

// Load Express Configuration
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Load API Routes
var apiRoutes = require("./routes.js");
app.use('/', apiRoutes);

// Load and Connect to Error Handling
var errorHandler = require('./errors.js')(app);

module.exports = app;
