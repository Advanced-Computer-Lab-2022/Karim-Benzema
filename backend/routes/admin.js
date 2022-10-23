const express = require('express')
const {
    createAdmin,
    getAdmin,
    getAdmins,
    deleteAdmin,
    updateAdmin
} = require('../controllers/adminController') //new
const router = express.Router()

router.get('/', getAdmins)

router.get('/:id',getAdmin)

router.post('/', createAdmin)

router.delete('/:id', deleteAdmin)

router.patch('/:id', updateAdmin)
module.exports = router 