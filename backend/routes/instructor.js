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
    createQuestion,
    createproblem,
    getproblems,
    curr,
    moneyOwed,
    getMyReviews
    //yasm
    // ,getInstbyid
} = require('../controllers/instructorController') //new
const router = express.Router()
router.get('/name', getCourseTitle)
router.get('/get',getinstructor)
router.get('/filter', filterSubjectOrPrice) //change /:price to filter by price until we connect to frontend
router.get('/getMyCourseRating/:id',getCourseRating)
router.get('/getMyRating/:id',getMyRating) //done
router.get('/search', searchSubjectOrTitle) //change /:title to search by title until we connect to frontend
router.post('/createcourse/:instructor',createcourse )
router.get('/viewcourses/:id', getcourse)
router.get('/subjectRating', getcoursebysubjectRating)
router.get('/subjectorRating', getcoursebysubjectorRating)
router.get('/getpriceof1course', getpriceof1course)
router.get('/search2', searchawy)
router.get('/courses',instCourses)
router.patch('/discount/:id',definediscount)
router.patch('/updateCountry/:id', updateCountry)
router.patch('/changePassword/:id', changePassword)
router.get('/prices', getcoursebyprice)
router.get('/getproblems', getproblems)
router.post('/createinst',createinst )
//router.post('/createQuestion',createQuestion )
router.patch('/editBio/:id', editBio)
router.patch('/editEmail/:id', editEmail)
router.patch('/upload', upload)
router.post('/createSubtitle',createSubtitle)
router.patch('/preview', preview)
router.post('/createExam',createExam )
router.post('/createQuestions',createQuestion )
router.post('/createProblem/:id',createproblem )
router.get('/currency/:id', curr)
router.get('/calculateEarnings/:id',moneyOwed)
router.get('/getMyReviews/:id',getMyReviews)
//yasm
// router.get('/getinstbyid/:id', getInstbyid)
module.exports = router 


