const mongoose = require ('mongoose')

const movieSchema = new mongoose.Schema(

    {
        name: String, 
        genre: String, 
        image: String, 
        year: Number, 
        rating: Number, 
    }
)


const Movie = mongoose.model('movies', movieSchema)


module.exports = Movie 