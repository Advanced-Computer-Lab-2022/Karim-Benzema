
const express = require('express')

const {
    createcourse,
    getCourses,
    searchSubjectOrTitle,
    getcoursebyprice,
    searchawy,
    getcoursebysubjectRating,
    getcoursebysubjectorRating,
    //yasm
    getCoursebyid,
    getSubtitlebyid
} = require('../controllers/courseController') //new

const router = express.Router()

router.post('/createcourse', createcourse)

router.get('/getCourses', getCourses)

router.get('/search',  searchSubjectOrTitle)

router.get('/filterbyprice/:min/:max', getcoursebyprice)
router.get('/search2', searchawy)
router.get('/subjectRating', getcoursebysubjectRating)
router.get('/subjectorRating', getcoursebysubjectorRating)
//yasm
router.get('/getcoursebyid/:id', getCoursebyid)
router.get('/getSubtitleById/:id',getSubtitlebyid)

module.exports = router 