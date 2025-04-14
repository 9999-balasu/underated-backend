
const express = require('express');
const router = express.Router();
const { addMovieRating } = require('../controllers/movieRatingController');

router.post('/movies/rate', addMovieRating);

module.exports = router;
