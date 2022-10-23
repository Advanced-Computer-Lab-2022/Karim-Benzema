const express = require('express')
const admin = require('../models/adminModel') //vip
//const admin = require(admin)
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
    const{name,username,password} = req.body
    try{
        const administrator= await admin.create({name,username,password}) //change
        res.status(200).json(administrator)
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