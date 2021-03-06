const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlaylistSchema = new Schema ({
    name: {type: String, required: true}, 
    description: {type: String, required: true},
    movies: [
        {
        type: Schema.Types.ObjectId, 
        ref: 'Movie',
         }
    ]
});

const Playlist = mongoose.model('Playlist', PlaylistSchema);

module.exports = Playlist;