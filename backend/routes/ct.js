const express = require('express')
const {
    updateCountry,
    getct,
    getcourse,
    // getcoursebysubject,
    // getcoursebyrating,
    getcoursebysubjectRating,
    getcoursebysubjectorRating,
    searchawy,
    rateCourse,
    rateInstructor,
    changePassword,
    reviewInstructor,
    reviewCourse,
    register,
    getCoursebyCtid
} = require('../controllers/ctController') //new

const router = express.Router()
// /ct1/
router.patch('/updateCountry/:id', updateCountry)
router.patch('/changePassword', changePassword)
router.patch('/rateCourse', rateCourse)
router.patch('/rateInstructor', rateInstructor)
router.get('/viewcourses', getcourse)
router.get('/araf/:id', getct)
router.get('/getcoursebyctid', getCoursebyCtid)
// router.get('/subjects/:subject', getcoursebysubject)
// router.get('/rating/:rating', getcoursebyrating)
router.get('/subjectRating/:subject/:rating', getcoursebysubjectRating)
router.get('/subjectorRating/:subject/:rating', getcoursebysubjectorRating)
router.get('/search/:input', searchawy)
router.patch('/reviewInst', reviewInstructor)
router.patch('/reviewCourse', reviewCourse)
router.patch('/register',register)
module.exports = router 