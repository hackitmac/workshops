
// Instantiate the controller
angular.module('eventListing')
  .controller('listingController', listingController);

// Load in our dependencies for this controller (we need _event!)
listingController.$inject = [
  '$scope',
  '_event',

  // Resolves
  'events'
];

function listingController($scope, _event, events) {
  $scope.events = events.data;

  $scope.deleteEvent = deleteEvent;

  function deleteEvent(event, index) {
    _event.delete(event._id)
      .then(function() {

        // Event was deleted, let's remove it from the list!
        $scope.events.splice(index, 1);
      });
  }
}