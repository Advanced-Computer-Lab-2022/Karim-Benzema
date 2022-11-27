
//use .env file 
require('dotenv').config() 

const { response } = require('express')
const express = require('express')
const adminRoutes = require('./routes/admin')
const instructorRoutes = require('./routes/instructor')
const itRoutes = require('./routes/it')
const ctRoutes = require('./routes/ct')
const coursesRoutes = require('./routes/courses')
const guestRoutes = require('./routes/guest')
const subtitleRoutes = require('./routes/subtitle')
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
app.use('/api/admin',adminRoutes)
app.use('/api/instructor',instructorRoutes)
app.use('/api/it',itRoutes)
app.use('/api/ct',ctRoutes)
app.use('/api/courses',coursesRoutes)
app.use('/api/guest',guestRoutes)
app.use('/api/subtitle',subtitleRoutes)

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

const x =100



