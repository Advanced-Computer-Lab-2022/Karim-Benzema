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
    editBio,
    createinst,
    editEmail
} = require('../controllers/instructorController') //new
const router = express.Router()

router.get('/name', getCourseTitle)
router.get('/get',getinstructor)

router.get('/filter/:subject', filterSubjectOrPrice) //change /:price to filter by price until we connect to frontend

router.get('/search', searchSubjectOrTitle) //change /:title to search by title until we connect to frontend

router.post('/createcourse',createcourse )
//yasm
router.patch('/:id', updateCountry)

router.get('/viewcourses', getcourse)

router.get('/prices', getcoursebyprice)

router.get('/subjectRating/:subject/:rating', getcoursebysubjectRating)

router.get('/subjectorRating/:subject/:rating', getcoursebysubjectorRating)

router.get('/getpriceof1course/:title', getpriceof1course)

router.get('/search2/:input', searchawy)

router.post('/createinst',createinst )

router.patch('/editBio/:id', editBio)
editEmail
router.patch('/editEmail/:id', editEmail)
module.exports = router 


