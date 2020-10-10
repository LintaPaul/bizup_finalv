const config = require('../config')
const { Router } = require('express')

const router = Router()

// Initialize Controller
const usersController = require('../controllers/usercontroller')

// Register
router.post('/register', usersController.register)

// Login
router.post('/login', usersController.login)

// Get User
router.get('/user', usersController.user)

module.exports = router