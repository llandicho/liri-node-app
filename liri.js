
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
function movieThis(movie) {
	// body...
	// console.log('movieThis works')
	// console.log('searching ombd for: '+movie)
    var omdbURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=f1a4421f"
    request(omdbURL, function (error, response, body){
    	var data = JSON.parse(body)
    	// console.log(data)
    	console.log('Title: '+data.Title)
    	console.log('Year: '+data.Year)
    	console.log('IMDB rating: '+data.imdbRating)
    	console.log('Rotten Tomatoes rating: '+data.Ratings[1].Value)
    	console.log('Country: '+data.Country)
    	console.log('Language: '+data.Language)
    	console.log('Plot: '+data.Plot)
    	console.log('Actors: '+data.Actors)
	})
};



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



