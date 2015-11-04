var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var app = express();

var mongoose = require('mongoose');
mongoose.connect("mongodb://kurtbradd:hackitmac15@ds045614.mongolab.com:45614/eventdb")

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

var routes = require('./routes/index');
var users = require('./routes/users');
var events = require('./routes/events.js');

app.use('/', routes);
app.use('/users', users);
app.use('/events', events);

var errorHandler = require('./errors.js')(app);

module.exports = app;
