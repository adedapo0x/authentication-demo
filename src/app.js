const express = require('express')
const authRouter = require('./routes/auth.routes')
const userRouter =  require('./routes/users.routes')

const app = express()

app.use(express.json())

app.use('/user', userRouter)
app.use('', authRouter)




module.exports = app