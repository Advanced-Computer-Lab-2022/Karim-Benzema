
//use .env file 
require('dotenv').config() 
const cors = require('cors');
const { response } = require('express')
const express = require('express')
const adminRoutes = require('./routes/admin')
const instructorRoutes = require('./routes/instructor')
const itRoutes = require('./routes/it')
const ctRoutes = require('./routes/ct')
const coursesRoutes = require('./routes/courses')
const guestRoutes = require('./routes/guest')
const subtitleRoutes = require('./routes/subtitle')
const passwordResetRoutes = require('./routes/passwordReset')
const register = require('./routes/register') //individual Trainee
const login = require('./routes/login')
const mongoose = require('mongoose')
const logout = require('./routes/logout')
const cookieParser = require('cookie-parser');
const { requireAuth } = require('./Middleware/authMiddleware');

// express app
const app = express()
app.use(cors());
//middleware 
app.use(express.json()) //checks if the request has some data to send to the server
//and if it does it passes it and attaches it to the request obj (request handler)
app.use((req,res,next) => {
    console.log(req.path,req.method)
    next()
})

app.use(cookieParser());
//route handler 
app.use('/api/admin',requireAuth,adminRoutes)
app.use('/api/instructor',requireAuth,instructorRoutes)
app.use('/api/it',itRoutes)//,requireAuth
app.use('/api/ct',requireAuth,ctRoutes)
app.use('/api/courses',coursesRoutes)
app.use('/api/guest',guestRoutes)
app.use('/api/subtitle',subtitleRoutes)
app.use('/api/passwordReset',passwordResetRoutes)
app.use('/api/register',register)
app.use('/api/login',login)
app.use('/api/logout',logout)

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




