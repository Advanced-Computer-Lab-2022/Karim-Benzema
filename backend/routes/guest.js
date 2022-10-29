const express = require('express')
const {
    updateCountry,
    getcourse,
    getcoursebysubjectRating,
    getcoursebysubjectorRating,
    search,
    getpriceof1course
} = require('../controllers/guestController') //new

const router = express.Router()
router.patch('/:id', updateCountry)
router.get('/viewcourses', getcourse)
router.get('/prices/:price', getpriceof1course)
router.get('/subjectRating/:subject/:rating', getcoursebysubjectRating)
router.get('/subjectorRating/:subject/:rating', getcoursebysubjectorRating)
router.get('/search/:input', search)

module.exports = router 

