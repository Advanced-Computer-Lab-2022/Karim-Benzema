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
    getCoursebyCtid,
    createproblem,
    getproblems,
    getproblems1,
    getproblems2,
    getrequests,
    viewExam,
    solve,
    correctingg,
    getAnswerss, coloringAnswers, coloringWrongs,
    getProgress,
    watchedArray
} = require('../controllers/ctController') //new

const router = express.Router()
// /ct1/
router.patch('/updateCountry/:id', updateCountry)
router.patch('/changePassword/:id', changePassword)
router.patch('/rateCourse', rateCourse)
router.patch('/rateInstructor', rateInstructor)
router.get('/viewcourses', getcourse)
router.get('/araf/:id', getct)
router.get('/getcoursebyctid/:id', getCoursebyCtid)
// router.get('/subjects/:subject', getcoursebysubject)
// router.get('/rating/:rating', getcoursebyrating)
router.get('/getproblems', getproblems)
router.get('/subjectRating/:subject/:rating', getcoursebysubjectRating)
router.get('/subjectorRating/:subject/:rating', getcoursebysubjectorRating)
router.get('/search/:input', searchawy)
router.patch('/reviewInst', reviewInstructor)
router.patch('/reviewCourse', reviewCourse)
router.patch('/register/:id/:ctid',register)
router.post('/createProblem/:id',createproblem)
router.get('/getrequests/:id', getrequests)
router.get('/getproblems1', getproblems1)//for inst
router.get('/getproblems2', getproblems2)//for ct
router.get('/viewExam/:id', viewExam)
router.get('/getWrongAnswers/:subid/:ctid',getAnswerss)
router.get('/coloringAnswers',coloringAnswers)
router.get('/coloringWrongs',coloringWrongs)
router.post('/answer/:id/:ctid', solve)
router.get('/getAnswers', correctingg)
router.get('/getprogress/:id/:ctid',getProgress)
router.post('/watchedArray/:subid/:ctid',watchedArray)

module.exports = router 