
const express = require('express')
const courses = require('../models/coursesModel') //vip
const router = express.Router()

router.get('/', (req,res) => 
{
    res.json({mssg: "get all workouts"})
})

router.get('/:id', (req,res) => 
{
    res.json({mssg: "get a single workout"})
})

router.post('/', )

router.delete('/:id', (req,res) => 
{
    res.json({mssg: "DELETE a workout"})
})

router.patch('/:id', (req,res) => 
{
    res.json({mssg: "UPDATE a new workout"})
})
module.exports = router 