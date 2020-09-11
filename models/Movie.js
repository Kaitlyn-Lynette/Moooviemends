const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema ({
    title: {type: String, required: true},
    director: {type: String, required: true},
    genre: {type: String, require: true},
    released: {type: Date, require: true},
    playlist: {
        type: Schema.Types.ObjectId,
        ref: 'Playlist',
    },
});

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;