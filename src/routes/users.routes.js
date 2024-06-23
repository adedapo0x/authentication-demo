const express = require('express')
const userRouter = express.Router()
const {httpRegister, getUsers} = require('../controllers/users.controllers')
const verifyJWT = require('../middlewares/verifyJWT')


userRouter.post('/register', httpRegister)
userRouter.get('/users', verifyJWT, getUsers)


module.exports = userRouter
