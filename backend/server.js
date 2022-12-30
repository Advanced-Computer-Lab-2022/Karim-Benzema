
//use .env file 
require('dotenv').config() 
const cors = require('cors');
const { response } = require('express')
const express = require('express')
const adminRoutes = require('./routes/admin')
const instructorRoutes = require('./routes/instructor')
const ctRoutes = require('./routes/ct')
const coursesRoutes = require('./routes/courses')
const guestRoutes = require('./routes/guest')
const subtitleRoutes = require('./routes/subtitle')
const passwordResetRoutes = require('./routes/passwordReset')
const register = require('./routes/register') //individual Trainee
const login = require('./routes/login')
const itRoutes = require('./routes/it')
const mongoose = require('mongoose')
const logout = require('./routes/logout')
const cookieParser = require('cookie-parser');
const { requireAuth } = require('./Middleware/authMiddleware');
const { resolve } = require("path");
const {it} = require('./models/itModel')
const course = require('./models/coursesModel')
// express app
const app = express()
app.use(cors());
const YOUR_DOMAIN = 'http://localhost:3000';

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-08-01",
});

app.use(express.static(process.env.STATIC_DIR));

app.get("/", (req, res) => {
  const path = resolve(process.env.STATIC_DIR + "/index.html");
  res.sendFile(path);
});

app.get("/config", (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

app.post('/create-payment-intent/:id/:itid', async (req, res) => {
  const  id  = req.params.id;
  const  itid  = req.params.itid;
  const price = await course.findById({_id:id}).select('price')
  const pri =price.price
  const user = await it.findOne({_id:itid})
  const array = await user.courses
  if(array.includes(id)){
    console.log('already enrolled')
    return res.status(400).send({
      error: {
        message: 'already enrolled',
      },
    });
  }
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "EUR",
      amount: pri*100,
      automatic_payment_methods: { enabled: true },
  });
    console.log(paymentIntent.clientSecret)
    console.log(paymentIntent.status)
    // Send publishable key and PaymentIntent details to client
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    console.log(e)
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
});


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
app.use('/api/it',requireAuth,itRoutes)
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




