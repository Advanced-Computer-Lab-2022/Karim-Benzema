const express = require('express')
const {
    getCourseTitle,
    createcourse,
    filterSubjectOrPrice,
    searchSubjectOrTitle,
    //yasm
    updateCountry,
    getcourse,
    getinstructor,
    getcoursebyprice,
    getcoursebysubjectRating,
    getcoursebysubjectorRating,
    getpriceof1course,
    searchawy,
    instCourses,
    //yasm2
    definediscount
} = require('../controllers/instructorController') //new
const router = express.Router()

router.get('/name', getCourseTitle)
router.get('/get',getinstructor)

router.get('/filter', filterSubjectOrPrice) //change /:price to filter by price until we connect to frontend

router.get('/search', searchSubjectOrTitle) //change /:title to search by title until we connect to frontend

router.post('/createcourse',createcourse )
//yasm
router.patch('/updateCountry', updateCountry)
router.get('/viewcourses', getcourse)
router.get('/prices/:price', getcoursebyprice)
router.get('/subjectRating', getcoursebysubjectRating)
router.get('/subjectorRating', getcoursebysubjectorRating)
router.get('/getpriceof1course', getpriceof1course)
router.get('/search2', searchawy)
router.get('/courses',instCourses)
router.patch('/discount',definediscount)
module.exports = router 



