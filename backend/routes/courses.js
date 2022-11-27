
const express = require('express')

const {
    createcourse,
    getCourses,
    searchSubjectOrTitle,
    getcoursebyprice,
    searchawy,
    getcoursebysubjectRating,
    getcoursebysubjectorRating
} = require('../controllers/courseController') //new

const router = express.Router()

router.post('/createcourse', createcourse)

router.get('/getCourses', getCourses)

router.get('/search',  searchSubjectOrTitle)

router.get('/filterbyprice/:min/:max', getcoursebyprice)
router.get('/search2', searchawy)
router.get('/subjectRating', getcoursebysubjectRating)
router.get('/subjectorRating', getcoursebysubjectorRating)


// router.get('/', (req,res) => 
// {
//     res.json({mssg: "get all workouts"})
// })

// router.get('/:id', (req,res) => 
// {
//     res.json({mssg: "get a single workout"})
// })

// router.post('/', )

// router.delete('/:id', (req,res) => 
// {
//     res.json({mssg: "DELETE a workout"})
// })

// router.patch('/:id', (req,res) => 
// {
//     res.json({mssg: "UPDATE a new workout"})
// })
module.exports = router 