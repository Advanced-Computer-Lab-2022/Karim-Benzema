const express = require('express')
const {
    updateCountry,
    getcourse,
    getcoursebysubjectRating,
    getcoursebysubjectorRating,
    search,
    getpriceof1course,
    getcoursebyid, viewExam
} = require('../controllers/guestController') //new

const router = express.Router()
router.patch('/updateCountry/:id', updateCountry)
router.get('/viewcourses', getcourse)
router.get('/prices/:price', getpriceof1course)
router.get('/subjectRating/:subject/:rating', getcoursebysubjectRating)
router.get('/subjectorRating/:subject/:rating', getcoursebysubjectorRating)
router.get('/search/:input', search)
router.get('/getcoursebyid',getcoursebyid)
router.get('/viewExamGuest/:id/:subtitle',viewExam)
module.exports = router 

