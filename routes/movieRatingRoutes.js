const express = require('express');
const router = express.Router();
const MovieRating = require('../models/MovieRating');


router.post('/movies/rating', async (req, res) => {
    const { rating, fk_userId, fk_movieId } = req.body;

    try {
        
        const existingRating = await MovieRating.findOne({ fk_userId, fk_movieId });
        if (existingRating) {
            return res.status(400).json({ message: "You have already rated this movie!" });
        }

        
        const newRating = new MovieRating({ rating, fk_userId, fk_movieId });
        await newRating.save();

        res.status(201).json({ message: "Movie rated successfully!", newRating });
    } catch (error) {
        res.status(500).json({ message: "Server Error.", error });
    }
});

module.exports = router;
