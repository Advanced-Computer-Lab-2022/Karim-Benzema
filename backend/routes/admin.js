const express = require('express')
const {
    createAdmin,
    createinstructor,
    createct
} = require('../controllers/adminController') //new
const router = express.Router()

router.post('/create1', createAdmin)
router.post('/create2', createinstructor)
router.post('/create3', createct)

// router.get('/', getAdmins)

// router.get('/:id',getAdmin)

// router.delete('/:id', deleteAdmin)

// router.patch('/:id', updateAdmin)
module.exports = router 