const mongoose = require('mongoose');

const moviesLikeSchema = new mongoose.Schema({
    type: { type: String, required: true },
    fk_userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    fk_movieId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Movie' }
}, { timestamps: true });

module.exports = mongoose.model('MoviesLike', moviesLikeSchema);
