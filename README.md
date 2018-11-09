# Liri-Node-App

In this assignment, you will make LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

# What will the Liri-Node App do?

* LIRI will search Spotify for songs
* LIRI will search Bands in Town for concerts
* LIRI will search OMDB for movies.

# Instructions 1A
* Make a new GitHub repository called liri-node-app and clone it to your computer.
* Send requests to the Bands in Town, Spotify and OMDB APIs.
* Include screenshots (or a video) of typical user flows through your application (for the customer and if relevant the manager/supervisor). This includes views of the prompts and the responses after their selection (for the different selection options).
* Please submit the link to the Github Repository!

# Instructions 1B

1. Navigate to the root of your project and run **npm init -y** — this will initialize a **package.json** file for your project. The **package.json** file is required for installing third party npm packages and saving their version numbers. If you fail to initialize a **package.json** file, it will be troublesome, and at times almost impossible for anyone else to run your code after cloning your project.

  2.Make a **.gitignore** file and add the following lines to it. This will tell git not to track these files, and thus they won't be committed to Github.
  -  node_modules
  - .DS_Store
  - .env

3. Make a JavaScript file named **keys.js.**
  ```javascript
  console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
```
4.Create a file named **.env**, add the following to it, replacing the values with your API keys (no quotes) once you have them:
  ```
  # Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret
```



# Links 
Check out the link below for the Repository files.
(https://github.com/lquint85/liri-node-app)
