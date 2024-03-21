const express = require('express')
const router = express.Router()
const checkTokenMiddleware = require('../middlewares/checkTokenMiddleware')

const UserController = require('../controllers/UserController')

router.post('/auth/register', UserController.createUser)

router.post('/auth/login', UserController.loginUser)

router.get('/users/listUsers', checkTokenMiddleware.checkToken , UserController.listUsers)

module.exports = router