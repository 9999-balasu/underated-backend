const MovieRating = require('../models/MovieRating');

exports.addMovieRating = async (req, res) => {
    const { rating, fk_userId, fk_movieId } = req.body;

    try {
        const alreadyRated = await MovieRating.findOne({ fk_userId, fk_movieId });
        if (alreadyRated) {
            return res.status(400).json({ message: "You have already rated this movie!" });
        }

        const newRating = new MovieRating({ rating, fk_userId, fk_movieId });
        await newRating.save();

        res.status(201).json({ message: "Movie rated successfully!", newRating });
    } catch (error) {
        res.status(500).json({ message: "Server error.", error });
    }
};
