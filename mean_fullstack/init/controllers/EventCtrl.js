var EventModel = require("../models/event.js");

// Create Event => POST localhost:3000/events
exports.createEvent = function (req, res, next) {

  // Init a new EventModel
  var newEvent = new EventModel();

  // Set attributes of new EventModel
  // Get attributes from request body
  newEvent.name = req.body.name;
  newEvent.date = req.body.date;
  newEvent.description = req.body.description;

  // Save the event in database
  newEvent.save(function (err, savedEvent) {
    if (err) return next(err);
    return res.send(savedEvent);
  });

};

// Get All Events => GET localhost:3000/events
exports.getEvents = function (req, res, next) {

  // Query database for ALL events
  EventModel.find(function (err, events) {
    if (err) return next(err);
    return res.send(events);
  });

};

// Get a single Event => GET localhost:3000/events/:event_id
exports.getEvent = function (req, res, next) {

  // Get eventID from Request parameters
  var event_id = req.params.event_id;

  // Query database using eventID
  EventModel.findById(event_id, function (err, event) {
    if (err) return next(err);
    return res.send(event);
  })

};

// Update an event
// PUT localhost:3000/events/:event_id
exports.updateEvent = function (req, res, next) {

  // Get eventID from Request parameters
  var event_id = req.params.event_id;

  // Find event with matching eventID
  EventModel.findById(event_id, function (err, event) {
    if (err) return next(err);

    // Update the event attributes using
    // passed in values from Request Body

    if (req.body.name) {
      event.name = req.body.name;
    }
    if (req.body.date) {
      event.date = req.body.date;
    }
    if (req.body.description) {
      event.description = req.body.description;
    }

    event.save(function (err, savedEvent) {
      if (err) return next(err);
      return res.send(savedEvent);
    })

  })

};

// Delete an event
// DELETE localhost:3000/events/:event_id
exports.deleteEvent = function (req, res, next) {

  var event_id = req.params.event_id;

  EventModel.findByIdAndRemove(event_id, function (err) {
    if (err) return next(err);
    return res.send();
  })
};
