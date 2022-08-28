const express = require ('express')
const mongoose = require ('mongoose')
const Movie = require ('./models/Schema.js')
const cors = require ('cors')
const app = express()




app.use(express.json())
app.use(cors())


//created the deleteMovie route down below 


app.delete ('/movies/:id', (req, res) => {
    Movie.findByIdAndRemove(req.params.id, (err, deleteMovie) => {
        res.json(deleteMovie)
        })
})


//created the update route allowing to update an object by id and resturn it to the get route with new updated information

app.put('/movies/:id', (req,res) => {
    Movie.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedMovie) => {
        res.json(updatedMovie);
    })
})


///created route to be able to to insert new data into the open array verified through postmant

app.post('/movies', (req, res) =>{
    Movie.create(req.body, (err, createMovie)=> {
        res.json(createMovie)
    })
})


//creating initial route to be able to see all data and display it on page .  

app.get('/movies', (req, res) => {
    Movie.find({}, (err, findMovie) => {
        res.json(findMovie)
    })
    })



////listeners down below////////// 
mongoose.connect('mongodb://localhost:27017/moviecrud')
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
})


app.listen(3000, () => {
    console.log('Listening on port 3000')
})