const express = require('express')
const {
    updateCountry,
    getit,
    getcourse,
    getcoursebyprice,
    // getcoursebysubject,
    // getcoursebyrating,
    getcoursebysubjectRating,
    getcoursebysubjectorRating,
    getpriceof1course,
    searchawy,
    rateCourse,
    rateInstructor,
    changePassword,
    itAnswer,
    viewExam,
    solve,
    correcting,
    correctingg,
    reviewCourse,
    reviewInstructor,
    getCoursebyitid,
    createproblem,
    getproblems,
    getAnswerss, coloringAnswers, coloringWrongs,
    getProgress,
    getproblems1,
    getproblems2,
    check,
    register
} = require('../controllers/itController') //new

const router = express.Router()
// /it1/
router.patch('/updateCountry/:id', updateCountry)
router.patch('/changePassword/:id', changePassword)
router.patch('/rateCourse', rateCourse)
router.patch('/rateInstructor', rateInstructor)
router.get('/viewcourses', getcourse)
router.get('/id/:id', getit)
router.patch('/rateCourse', rateCourse)
router.patch('/reviewCourse', reviewCourse)
router.patch('/rateInstructor', rateInstructor)
router.patch('/reviewInstructor', reviewInstructor)
router.get('/viewcourses', getcourse)
router.get('/getIt/:id', getit)
router.get('/prices/:price', getcoursebyprice)
// router.get('/subjects/:subject', getcoursebysubject)
// router.get('/rating/:rating', getcoursebyrating)
router.get('/subjectRating/:subject/:rating', getcoursebysubjectRating)
router.get('/subjectorRating/:subject/:rating', getcoursebysubjectorRating)
router.get('/getpriceof1course/:title', getpriceof1course)
router.get('/search/:input', searchawy)
router.get('/itAnswer', itAnswer)
router.get('/viewExam', viewExam)
router.post('/answer/:id/:itid', solve)
router.get('/getAnswers', correctingg)
router.get('/getproblems', getproblems)//it
router.get('/getcoursebyitid/:id', getCoursebyitid)
router.post('/createProblem/:id',createproblem)
router.get('/viewExam/:id', viewExam)
router.get('/getWrongAnswers',getAnswerss)
router.get('/coloringAnswers',coloringAnswers)
router.get('/coloringWrongs',coloringWrongs)
router.get('/getprogress/:id/:itid',getProgress)
router.get('/getproblems1', getproblems1)//for inst
router.get('/getproblems2', getproblems2)//for ct
router.get('/check/:id/:itid',check)
router.patch('/register/:id/:itid',register)


module.exports = router