var express = require("express");
var router = express.Router();

// Load EventCtrl
var EventCtrl = require("./controllers/EventCtrl.js");

// EVENT API ENDPOINTS

// Create an Event
router.post('/events', EventCtrl.createEvent);
// Get All Events
router.get('/events', EventCtrl.getEvents);
// Get a single Event
router.get('/events/:event_id', EventCtrl.getEvent);
// Update an Event
router.put('/events/:event_id', EventCtrl.updateEvent);
// Delete an Event
router.delete('/events/:event_id', EventCtrl.deleteEvent);

module.exports = router;
