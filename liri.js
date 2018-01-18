
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