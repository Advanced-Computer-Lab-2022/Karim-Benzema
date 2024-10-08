const express = require('express')
const it = require('../models/itModel') //vip
const router = express.Router()

router.get('/', (req,res) => 
{
    res.json({mssg: "get all workouts"})
})

router.get('/:id', (req,res) => 
{
    res.json({mssg: "get a single workout"})
})

router.post('/', async (req,res) => 
{
    const{name,username,password,country} = req.body
    try{
        const data= await it.create({name,username,password,country}) //change
        res.status(200).json(data)
    }catch(error) {
        res.status(400).json({error: error.message})
    }
})

router.delete('/:id', (req,res) => 
{
    res.json({mssg: "DELETE a workout"})
})

router.patch('/:id', (req,res) => 
{
    res.json({mssg: "UPDATE a new workout"})
})
module.exports = router 