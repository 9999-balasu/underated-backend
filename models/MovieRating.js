const mongoose = require('mongoose');

const movieRatingSchema = new mongoose.Schema({
    rating: { type: Number, required: true },
    fk_userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    fk_movieId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Movie' }
}, { timestamps: true });

module.exports = mongoose.model('MovieRating', movieRatingSchema);
