
const express = require('espress');

const router = express.router();


const MoviesLike = require('../models')


router.post('/movies/like', async(req,res)=>{
    const {type,fk_userId} =req.body;
   
    


try {
    const alreadyLiked = await MoviesLike.findOne({type, fk_userId, fk_movieId})

    if (alreadyLiked){
        return res.status(400). json({message: "you have already liked this movie"})
    }
    const like = new MoviesLike({type,fk_userId, fk_movieId})
    await like.save();

    res.status(201). json({message : " Movie liked successfully"  ,like})
} catch (error){
    res.status(500).json({message: "An error occurred on the server", error})
}



})


module.exports = router;