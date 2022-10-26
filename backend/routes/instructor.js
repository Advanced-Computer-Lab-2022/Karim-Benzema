const express = require('express')
const instructor = require('../models/instructorModel') //vip
const {
    getCourseTitle,
    createcourse,
    filterSubjectOrPrice,
    searchSubjectOrTitle
} = require('../controllers/instructorController') //new
const router = express.Router()

router.get('/name/:name', getCourseTitle)

router.get('/filter/:subject', filterSubjectOrPrice) //change /:price to filter by price until we connect to frontend

router.get('/search/:input', searchSubjectOrTitle) //change /:title to search by title until we connect to frontend

router.post('/createcourse',createcourse )

router.delete('/:id', (req,res) => 
{
    res.json({mssg: "DELETE a workout"})
})

router.patch('/:id', (req,res) => 
{
    res.json({mssg: "UPDATE a new workout"})
})
module.exports = router 

//old stuff 
// router.get('/', (req,res) => 
// {
//     res.json({mssg: "get all workouts"})
// })

// router.get('/:id', (req,res) => 
// {
//     res.json({mssg: "get a single workout"})
// })

// router.post('/', async (req,res) => 
// {
//     const{name,username,password,country} = req.body
//     try{
//         const i= await instructor.create({name,username,password,country}) //change
//         res.status(200).json(i)
//     }catch(error) {
//         res.status(400).json({error: error.message})
//     }
// })

// router.delete('/:id', (req,res) => 
// {
//     res.json({mssg: "DELETE a workout"})
// })

// router.patch('/:id', (req,res) => 
// {
//     res.json({mssg: "UPDATE a new workout"})
// })
