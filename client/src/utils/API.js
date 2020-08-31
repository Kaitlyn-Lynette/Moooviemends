import axios from "axios";
const BASEURL = "https://www.omdbapi.com/?t=";
const APIKEY = "&apikey=trilogy";

export default {
  //Movie Routes
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  },
  //Get the movies saved to the database for the playlist
  getMovies: function() {
    return axios.post('/api/movies');
  },
  //Add a new movie to the playlist
  createMovie: function (movieData) {
    return axios.post('/api/movies',movieData);
  },
  //Delete the movie from the playlist
  deleteMovie: function(id) {
    return axios.delete('/api/movies' + id);
  },
  
  //Playlist Routes
  //Get the playlist from database
  getPlaylists: function () {
    return axios.get('api/playlists');
  },
  updatePlaylists: function (nameData) {
    return axios.post('api/playlists',nameData);
  }

};