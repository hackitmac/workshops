
// Load routes (states) for our application
angular.module('eventListing')
  .config(config);

// What this block depends on
config.$inject = [
  '$stateProvider', // <-- From ui-router, we use this to configure our states
  '$urlRouterProvider' // <-- We use this to declare our default state
];

function config($stateProvider, $urlRouterProvider) {

  // Load up our states
  $stateProvider

    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html'
    })

    .state('listing', {
      url: '/listing',
      templateUrl: 'templates/listing.html',
      controller: 'listingController',

      // Advanced: load the events in before the state loads
      resolve: {
        events: ['_event', function(_event) {
          return _event.getAll();
        }]
      }
    })

    .state('create', {
      url: '/create',
      templateUrl: 'templates/create.html',
      controller: 'createController'
    });

  // Declare our default state to be the home state
  $urlRouterProvider.otherwise('/');
}