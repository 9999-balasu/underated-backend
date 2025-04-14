

const mongoose = require('mongoose');

const movieRatingSchema = new mongoose.Schema({
    rating: { type: Number, required: true },
    fk_userId: { type: String, required: true },
    fk_movieId: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('MovieRating', movieRatingSchema);
