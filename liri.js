
require("dotenv").config();

// variables
var fs = require("fs");
var keys = require("./keys.js");

var request = require("request");

var Twitter = require("twitter");

var Spotify = require("node-spotify-api");


 var spotify = new Spotify(keys.spotify);
 var client = new Twitter(keys.twitter);


var command = process.argv[2]
var userInput = process.argv[3]





//Twitter function

var params = {screen_name: 'louellalandicho'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});



//Spotify function
spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });




//Movie function

// Then run a request to the OMDB API with the movie specified
request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy", function(error, response, body) {
  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {
    fs.writeFile("response.txt", JSON.stringify(response), function(err){
      console.log('error', error);
    });
    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
  }
});




//Do it function

function doIt() {
  	// We will read the existing random.txt file
  	fs.readFile("random.txt", "utf8", function(err, data) {
	    if (err) {
	      return console.log(err);
	    }
		// separate data into command and userInput
		data = data.split(",");
		// console.log(data)
		command = data[0]
		userInput = data[1]
		// console.log('command: '+command, 'userInput: ' +userInput)
		console.log('you want me to run '+command+' on '+userInput)
		runCommand(command)
	})
};



