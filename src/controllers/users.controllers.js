const User = require('../models/users.model')

async function httpRegister(req, res){
    try{
        const {username, email, password} = req.body // gets client's input

        // basic validation (not to be used in production scenario)
        if (!username || !email || !password){
            return res.status(401).json({message: "Please provide all fields"})
        }

        // checks if email is already in use
        const checkEmail = await User.findOne({email})
        if (checkEmail) return res.status(401).json({message: "Email already exists"})

        const newUser = new User({username, email, password})
        await newUser.save()
        return res.json({message: "New user successfully onboarded!"})

    } catch (err){
        console.error(err)
        return res.status(501).json({message: "Server error"})
    }
}

async function getUsers(req, res){
    try{
        const users = await User.find({})
        return res.json({message: "Users fetched successfully", data: users})
    } catch (err) {
        console.log(err)
        return res.status(500).json({message: "Server error!"})
    }
    
}

module.exports = {
    httpRegister, getUsers
}