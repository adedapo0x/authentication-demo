const express = require('express')
const authRouter = express.Router()
const {httpLogin} = require('../controllers/auth.controller')


authRouter.post('/login', httpLogin)

modules.export = authRouter