const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const users = require('../models/users.model')

async function httpLogin(req, res){
    try {
        const {email, password} =  req.body // gets email from client's input

        const user = await users.findOne({ email }) // confirm existence through database
        if (!user) res.status(401).json({message: "Invalid email or password!"})
     
        const checkPassword = await bcrypt.compare(password, user.password)
        if (!checkPassword) res.status(401).json({message: "Invalid email or password!"})
        
        const payload = {userId: user._id}
        const accessToken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" })
        res.json({accessToken})
    } catch (error) {
        console.error(error)
        res.status(501).json({message: "Server error"})
    }
}

module.exports = {
    httpLogin, 
}