
// Instantiate the controller
angular.module('eventListing')
  .controller('createController', createController);

// Load our service into the controller
createController.$inject = [
  '$scope',
  '$state',
  '_event'
];

function createController($scope, $state, _event) {
  $scope.createEvent = createEvent;

  // Our form will fill this in for us
  $scope.event = { };

  function createEvent() {
    if ($scope.eventForm.$valid) {
      _event.create($scope.event)
        .then(function(event) {
          alert('Event created successfully!');

          // Let's go to the event listing to see our new event
          $state.go('listing');
        });
    }
  }
}