const express = require('express')
const {
    updateCountry,
    getit,
    getcourse,
    getcoursebyprice,
    // getcoursebysubject,
    // getcoursebyrating,
    getcoursebysubjectRating,
    getcoursebysubjectorRating,
    getpriceof1course,
    searchawy
} = require('../controllers/itController') //new

const router = express.Router()
// /it1/
router.patch('/updateCountry', updateCountry)
router.get('/viewcourses', getcourse)
 router.get('/hello/:id', getit)
router.get('/prices/:price', getcoursebyprice)
// router.get('/subjects/:subject', getcoursebysubject)
// router.get('/rating/:rating', getcoursebyrating)
router.get('/subjectRating/:subject/:rating', getcoursebysubjectRating)
router.get('/subjectorRating/:subject/:rating', getcoursebysubjectorRating)
router.get('/getpriceof1course', getpriceof1course)
router.get('/search/:input', searchawy)

module.exports = router 

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
//         const data= await it.create({name,username,password,country}) //change
//         res.status(200).json(data)
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
