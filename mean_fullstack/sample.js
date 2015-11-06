var sayHello = function sayHello(name) {
  console.log("Hello " + name);
}

function greet(someParam) {
      someParam("bob");
}

var giveLastName = function (name) {
  return name + " smith";
}

// greet(sayHello);

// using function name
// sayHello("someone");

var names = ["bob", "alice"]
var newNames = names.map(giveLastName);
// newNames.forEach(sayHello)

// JSON format
bject notation
var someObj = {}; //empty object
someObj.name = "an empty obj";
console.log(someObj);
console.log(someObj.name);
someObj.afunction = sayHello;
someObj.afunction("kurt");
console.log(someObj);


// sync function = bad
var allEvents = Events.getAll();


// async function = good
Events.getAll(function (error, data) {
  // error will have db errors
  // data will have query results
});

// fake GET localhost:3000/Events
// return all Events
// server gets a GET request at localhost:3000/events
server.GET('/events', function (request, response, next) {

  // query the database
  Events.getAll(function (error, data) {
    if (error) {
      return next(error);
    }

    // server calls the send method on the response object
    // passing the results from database query
    return response.send(data);

  });

})


...code over here would execute
