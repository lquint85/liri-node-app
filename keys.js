//Add the code required to import the `keys.js` file and store it in a variable.
//import code?
let keys = require("keys.js");

let request =("request");
  
 

//You should then be able to access your keys information like so

var spotify = new Spotify(keys.spotify);


//===================================

console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};