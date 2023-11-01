const express = require('express')
const router = express.Router()
const { register, login } = require('../Controllers/auth')



// http://localhost:5000/api/login
router.post('/register', register)
router.post('/login', login)


module.exports = router