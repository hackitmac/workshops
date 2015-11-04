var express = require('express');
var router = express.Router();

var Event = require('../models/event.js');

// POST localhost:3000/events/information
router.post('/', function(req, res, next) {
  console.log(req.body.value1);
  res.send('events updated!');
});


module.exports = router;
