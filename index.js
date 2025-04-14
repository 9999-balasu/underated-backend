
const express = require('express');
const mongoose = require('mongoose');
const moviesLikeRoutes = require('./routes/moviesLikeRoutes');

const movieRatingRoutes = require('./routes/movieRatingRoutes');
const app = express();
app.use(express.json());

mongoose.connect('your_mongodb_connection_url')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));

app.use('/api', moviesLikeRoutes);




app.use('/api', movieRatingRoutes);


app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
