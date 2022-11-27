
const express = require('express')

const {
    createSubtitle
} = require('../controllers/subtitleController') //new

const router = express.Router()

router.post('/create', createSubtitle)

//router.get('/getCourses', getCourses)

module.exports = router 