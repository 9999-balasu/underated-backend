


const express = require('express');
const router = express.Router();
const { addMovieLike } = require('../controllers/moviesLikeController');

router.post('/movies/like', addMovieLike);

module.exports = router;
