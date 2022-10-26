const express = require('express')
const {
    updateCountry,
    getct,
    getcourse,
    // getcoursebysubject,
    // getcoursebyrating,
    getcoursebysubjectRating,
    getcoursebysubjectorRating,
    searchawy
} = require('../controllers/ctController') //new

const router = express.Router()
// /ct1/
router.patch('/:id', updateCountry)
router.get('/viewcourses', getcourse)
router.get('/:id', getct)
// router.get('/subjects/:subject', getcoursebysubject)
// router.get('/rating/:rating', getcoursebyrating)
router.get('/subjectRating/:subject/:rating', getcoursebysubjectRating)
router.get('/subjectorRating/:subject/:rating', getcoursebysubjectorRating)
router.get('/search/:input', searchawy)
module.exports = router 