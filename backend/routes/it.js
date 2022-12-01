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
    searchawy,
    rateCourse,
    rateInstructor,
    changePassword,
    createIT,
    reviewInstructor,
    reviewCourse
} = require('../controllers/itController') //new

const router = express.Router()
// /it1/
router.patch('/updateCountry/:id', updateCountry)
router.patch('/changePassword/:id', changePassword)
router.patch('/rateCourse', rateCourse)
router.patch('/rateInstructor', rateInstructor)
router.get('/viewcourses', getcourse)
router.get('/:id', getit)
router.get('/prices/:price', getcoursebyprice)
// router.get('/subjects/:subject', getcoursebysubject)
// router.get('/rating/:rating', getcoursebyrating)
router.get('/subjectRating/:subject/:rating', getcoursebysubjectRating)
router.get('/subjectorRating/:subject/:rating', getcoursebysubjectorRating)
router.get('/getpriceof1course/:title', getpriceof1course)
router.get('/search/:input', searchawy)
router.post('/createIT', createIT)
router.patch('/reviewInst', reviewInstructor)
router.patch('/reviewCourse', reviewCourse)
module.exports = router 
