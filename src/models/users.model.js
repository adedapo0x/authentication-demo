const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, min: 2},
    email: {type: String, required: true},
    password: {type: String, required: true}
})

UserSchema.pre('save', async (next) => {
    if (!this.isModified('password')) next()
    try {
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
        next()
    } catch (err){
        console.log(err)
    }
})

module.exports = mongoose.model('users', UserSchema)