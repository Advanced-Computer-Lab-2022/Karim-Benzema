const express = require('express')
const {
    getCourseTitle,
    createcourse,
    filterSubjectOrPrice,     //yasm
    searchSubjectOrTitle,    
    updateCountry,
    getcourse,
    getinstructor,
    getcoursebyprice,
    getcoursebysubjectRating,
    getcoursebysubjectorRating,
    getpriceof1course,
    searchawy,
    instCourses,
    definediscount,     //yasm2
    editBio,
    createinst,
    editEmail,
    upload,
    changePassword,
    getMyRating,
    getCourseRating,
    createSubtitle,
    preview,
    createExam,
    createQuestion
    //yasm
    // ,getInstbyid
} = require('../controllers/instructorController') //new
const router = express.Router()
router.get('/name', getCourseTitle)
router.get('/get',getinstructor)
router.get('/filter', filterSubjectOrPrice) //change /:price to filter by price until we connect to frontend
router.get('/getMyCourseRating/:id',getCourseRating)
router.get('/getMyRating/:id',getMyRating)
router.get('/search', searchSubjectOrTitle) //change /:title to search by title until we connect to frontend
router.post('/createcourse',createcourse )
router.get('/viewcourses', getcourse)
router.get('/subjectRating', getcoursebysubjectRating)
router.get('/subjectorRating', getcoursebysubjectorRating)
router.get('/getpriceof1course', getpriceof1course)
router.get('/search2', searchawy)
router.get('/courses',instCourses)
router.patch('/discount',definediscount)
router.patch('/updateCountry/:id', updateCountry)
router.patch('/changePassword', changePassword)
router.get('/prices', getcoursebyprice)
router.post('/createinst',createinst )
//router.post('/createQuestion',createQuestion )
router.patch('/editBio', editBio)
router.patch('/editEmail', editEmail)
router.patch('/upload', upload)
router.post('/create',createSubtitle)
router.patch('/preview', preview)
router.post('/createExam',createExam )
router.post('/createQuestions',createQuestion )
//yasm
// router.get('/getinstbyid/:id', getInstbyid)
module.exports = router 


