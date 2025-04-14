
const mongoose = require('mongoose');

const moviesLikeSchema = new mongoose.Schema({
    type: { type: String, required: true },
    fk_userId: { type: String, required: true },
    fk_movieId: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('MoviesLike', moviesLikeSchema);
