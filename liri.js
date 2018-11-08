// Assumes user setup has been completed
require("dotenv").config();



// gets the user input
const input = process.argv[2];

// makes a decision based on the command
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

function concertThis() {
    console.log("CONCERT THIS" + process.argv[3]);
}

function spotifyThisSong() {
    console.log("SPOTIFY THIS SONG" + process.argv[4]);
}

function movieThis() {
    console.log("MOVIE THIS" + process.argv[5]);
}
function doWhatItSays() {
    console.log("DO WHAT IT SAYS" + process.argv[6]);
}