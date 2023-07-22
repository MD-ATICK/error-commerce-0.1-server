const express = require('express')
const { isAuthenticateUser } = require('../auth/authCookies')
const { RegisterUser, LoginUser, MeUser } = require('../controllers/usersControllers')

const router = express.Router()

router.post('/login' , LoginUser)
router.post('/register' , RegisterUser)
router.get('/me' , isAuthenticateUser , MeUser)

module.exports = router