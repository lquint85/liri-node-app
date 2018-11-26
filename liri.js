//==============Initialize Requests===========================
require("dotenv").config();
let request = require("request");
let mykeys = require("./keys");
let Spotify = require("node-spotify-api");
let moment = require("moment");
let fs = require("fs");
let command = process.argv[2];
let input = process.argv.slice(3).join(" ");
// ============================================================

///////////////////////////////Spotify\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
let spotifySearch = function (searchTerm) {
    let spotify = new Spotify(mykeys.spotify);


    spotify.search({
        type: "track",
        query: searchTerm,
    }, function (err, data) {
        if (err) {
            return console.log("Error occurred here:" + err);

        }

        console.log("-------------------------------------------");
        console.log("Artist:" + data.tracks.items[0].artists[0].name);

        console.log("Song:" + data.tracks.items[0].name);
        console.log("Album:" + data.tracks.items[0].album.name);
        console.log("Preview Link:" + data.tracks.items[0].preview_url);
        console.log("------------------------------------------");
    });
};
/////////////////////////////////////////////////////////////////////////////////////

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\Omdb\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
let omdbSearch = function (searchTerm) {

    // console.log(body);
    //Default "Mr.Nobody"//


    if (!searchTerm) {
        searchTerm = "Mr. Nobody";
    }

    request("http://www.omdbapi.com/?t=" + searchTerm + "&y=&plot=short&apikey=trilogy",
        function (error, response, body) {
            if (!error && response.statusCode === 200) {

                console.log("-----------------------------------");
                console.log("Title:" + JSON.parse(body).Title);
                console.log("Release Year:" + JSON.parse(body).Year);
                console.log("IMDB Rating:" + JSON.parse(body).Ratings[0].Value);
                console.log("Rotten Tomatoes Rating:" + JSON.parse(body).Ratings[1].Value);
                console.log("Country" + JSON.parse(body).Country);
                console.log("Language:" + JSON.parse(body).Language);
                console.log("Plot:" + JSON.parse(body).Plot);
                console.log("Actors:" + JSON.parse(body).Actors);
                console.log("-----------------------------------");

            }
        });
};
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

///////////////////////////////// Bands in Town \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let concertSearch = function (searchTerm) {

    request(
        "https://rest.bandsintown.com/artists/" + searchTerm + "/events?app_id=codingbootcamp",
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                console.log(body);
            }

            //LOOP THROUGH DATA AND PULL INFO\\
            console.log(body);

            body = JSON.parse(body);

            for (i = 0; i < body.length; i++) {
                console.log("-------------------------------------");
                console.log("Venue:" + (body)[i].venue.name);
                console.log("Location:" + (body)[i].venue.country + ", " + (body)[i].venue.region + ", " + (body)[i].venue.city);
                console.log("Date:" + moment(body[i].datetime).format("MM/DD/YYYY"));
                console.log("-------------------------------------");
            }
        }
    );
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////// Do What it says \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let doWhatItSaysSearch = function () {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }

        let dataArr = data.split(",");
        let command = dataArr[0];
        let input = dataArr[1];

        if (command === "spotify-this-song") {
            spotifySearch(input);
        }
        if (command === "movie-this") {
            omdbSearch(input);
        }
        if (command === "concert-this") {
            concertSearch(input);
        }

    });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////Function Calls\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
if (command === "spotify-this-song") {
    spotifySearch(input);
}
if (command === "movie-this") {
    omdbSearch(input);
}
if (command === "concert-this") {
    concertSearch(input);
}
if (command === "do-what-it-says")
doWhatItSaysSearch(input);