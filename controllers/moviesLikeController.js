
const MoviesLike = require('../models/MoviesLike');

exports.addMovieLike = async (req, res) => {
    const { type, fk_userId, fk_movieId } = req.body;

    try {
        const alreadyLiked = await MoviesLike.findOne({ fk_userId, fk_movieId });
        if (alreadyLiked) {
            return res.status(400).json({ message: "You already liked this movie!" });
        }

        const like = new MoviesLike({ type, fk_userId, fk_movieId });
        await like.save();

        res.status(201).json({ message: "Movie liked successfully!", like });
    } catch (error) {
        res.status(500).json({ message: "Server error.", error });
    }
};
