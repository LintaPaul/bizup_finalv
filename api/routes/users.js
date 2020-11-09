const config = require('../config')
const { Router } = require('express')


const router = Router()



// Initialize Controller
const usersController = require('../controllers/usercontroller')


// Get All
router.get('/users', usersController.list)
// Get One
router.get('/users/:category', usersController.show)
// Get One
router.get('/users/:id', usersController.show1)
// Get One2
router.get('/users/:category', usersController.show)
// Register
router.post('/users/register', usersController.register)
//categoryuser
router.post('/users/idsearch',usersController.category)
//send req
router.post('/users/req',usersController.creq)
//addtofriends
router.post('/users/friends',usersController.cfriends)
//
router.post('/users/remreq',usersController.remreq)
// Login
router.post('/users/login', usersController.login)

// Get User
router.get('/users/user', usersController.user)


module.exports = router