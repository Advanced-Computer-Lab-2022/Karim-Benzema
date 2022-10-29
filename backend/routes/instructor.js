const express = require('express')
const {
    getCourseTitle,
    createcourse,
    filterSubjectOrPrice,
    searchSubjectOrTitle,
    //yasm
    updateCountry,
    getcourse,
    getcoursebyprice,
    getcoursebysubjectRating,
    getcoursebysubjectorRating,
    getpriceof1course,
    searchawy
} = require('../controllers/instructorController') //new
const router = express.Router()

router.get('/name/:name', getCourseTitle)

router.get('/filter/:subject', filterSubjectOrPrice) //change /:price to filter by price until we connect to frontend

router.get('/search/:input', searchSubjectOrTitle) //change /:title to search by title until we connect to frontend

router.post('/createcourse',createcourse )
//yasm
router.patch('/:id', updateCountry)
router.get('/viewcourses', getcourse)
router.get('/prices/:price', getcoursebyprice)
router.get('/subjectRating/:subject/:rating', getcoursebysubjectRating)
router.get('/subjectorRating/:subject/:rating', getcoursebysubjectorRating)
router.get('/getpriceof1course/:title', getpriceof1course)
router.get('/search2/:input', searchawy)

module.exports = router 


