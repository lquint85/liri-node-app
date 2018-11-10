//============ Loads Node Modules ===============
require("dotenv").config();
let spotify = require("node-spotify-api");
let fs = require("fs");
let request = ("request");
let keys = require("./keys.js");
let moment = require("moment");

//==== Declare variables for user input ==========
let ask = process.argv[2];
let input = process.argv.slice(3).join(",");

//=========== Spotify ============================
let songSearch = function (searchTerm) {
    let spotify = new Spotify(keys.spotify);
    console.log(keys.spotify);


//==========  Spotify Search & Display ===========
spotify.search({type: "track", query:searchTerm}, function(err, data) {
    if (err) {
        return console.log("Error occured here:" + err);
    }
    console.log("---------------------------------------");
    console.log("Artist:" + data.tracks.items[0].artist[0].name);
    console.log("Song:" + data.track.items[0].name);
    console.log("Album:"+ data.track.items[0].album.name);
    console.log("Preview-Link:" +data.tracks.items[0].preview_url);
    console.log("---------------------------------------");
});


//======= Makes a descision based on command ======
switch (input) {
    case "conert-this":
        concertThis();
        break;
    case "spotify-this-song":
        spotifyThisSong();
        break;
    case "movie-this":
        movieThis();
        break;
    case "do-what-it-says":
        doWhatItSays();
        break;
    default:
        console.log("I want liri bot to do the work");
        break;
}
//============= Function Declarations =============
function concertThis() {
    console.log("CONCERT THIS" + process.argv);
}

function spotifyThisSong() {
    console.log("SPOTIFY THIS SONG" + process.argv);
}

function movieThis() {
    console.log("MOVIE THIS" + process.argv);
}

function doWhatItSays() {
    console.log("DO WHAT IT SAYS" + process.argv);
}