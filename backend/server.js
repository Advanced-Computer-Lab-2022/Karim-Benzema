
//use .env file 
require('dotenv').config() 

const { response } = require('express')
const express = require('express')
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose')

// express app
const app = express()

//middleware 
app.use(express.json()) //checks if the request has some data to send to the server
//and if it does it passes it and attaches it to the request obj (request handler)
app.use((req,res,next) => {
    console.log(req.path,req.method)
    next()
})

//route handler 
app.use('/api/workouts',workoutRoutes)

//connect to DB
mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
    // Listen for requests 
    app.listen(process.env.PORT,() => {
    console.log('Connected to DB & listening on port 4000!')
})
  })
  .catch((error)=>{
    console.log(error)
  })




