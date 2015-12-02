
// Instantiate the service
angular.module('eventListing')
  .service('_event', _event);

// All we need is $http to talk to the server
_event.$inject = [
  '$http'
];

function _event($http) {

  // What this service offers (will be built up)
  var service = { };

  // Get all of the events
  service.getAll = function() {
    return $http.get('/events');
  }

  // Get just one event (with an id)
  service.getOne = function(id) {
    return $http.get('/events/' + id);
  }

  // Create a new event, with some data provided by the user
  service.create = function(event) {
    return $http.post('/events', event);
  }

  // Delete the event given its identifier
  service.delete = function(id) {
    return $http.delete('/events/' + id);
  }

  return service;
}