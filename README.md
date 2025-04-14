


  Movie Like & Rating API
This small Express.js backend project

 Like a specific movie.
Rate a specific movie.

Both Like and Rating are stored in MongoDB using Mongoose.

 Project Structure



models/
│   ├── MoviesLike.js        // Like Schema
│   └── MovieRating.js       // Rating Schema

controllers/
│   ├── moviesLikeController.js   // Like API Logic
│   └── movieRatingController.js  // Rating API Logic

routes/
│   ├── moviesLikeRoutes.js      // Like API Route
│   └── movieRatingRoutes.js     // Rating API Route

index.js                        // Express Server MongoDB Schemas
MoviesLike.js


type: String
fk_userId: String
fk_movieId: String
Stores which user liked which movie.

MovieRating.js

rating: Number
fk_userId: String
fk_movieId: String
Stores the user's rating for a movie.

 APIs
1 Add Movie Like
POST /api/movies/like

Body:

json

{
  "type": "Like",
  "fk_userId": "USER_ID",
  "fk_movieId": "MOVIE_ID"
}
Purpose:
Stores a like from the user for a specific movie.
Prevents duplicate likes.

 Add Movie Rating
POST /api/movies/rate

Body:

{
  "rating": 5,
  "fk_userId": "USER_ID",
  "fk_movieId": "MOVIE_ID"
}
Purpose:
Stores a rating (1-5) from the user for a specific movie.
Prevents duplicate ratings by the same user for the same movie.

 Technologies Used
Node.js

Express.js

MongoDB

Mongoose

Nodemon

 Responsibility
 My role in this project was:



Writing Express.js APIs for adding Likes and Ratings to movies by users.

Ensuring one user can only like or rate a movie once.

 My Task is Complete!











