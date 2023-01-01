const express = require('express')
const {
    createAdmin,
    createinstructor,
    createct,
    getAdmins,
    addFollowupIT,
    acceptRequest,
    getproblems,
    discount1Course,
    discountAllCourses,
    addFollowupCT,
    addFollowupINST,
    getrequests,
    AcceptRefund,
    getrefunds
} = require('../controllers/adminController') //new
const router = express.Router()

router.post('/create1', createAdmin)
router.post('/create2', createinstructor)
router.post('/create3', createct)
router.get('/getAdmins', getAdmins)
router.get('/getproblems', getproblems)
router.patch('/followupIT/:id',addFollowupIT)
router.patch('/acceptRequest/:id/:requestId',acceptRequest)
router.patch('/discount1/:id',discount1Course)
router.patch('/discountall',discountAllCourses)
router.patch('/followupCT/:id',addFollowupCT)
router.patch('/followupINST/:id',addFollowupINST)
router.get('/getrequests', getrequests)
router.get('/getrefunds', getrefunds)
router.patch('/acceptrefund/:id/:itid',AcceptRefund)



// router.get('/:id',getAdmin)

// router.delete('/:id', deleteAdmin)

// router.patch('/:id', updateAdmin)
module.exports = router 