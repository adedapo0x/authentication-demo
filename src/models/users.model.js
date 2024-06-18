const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, min: 2},
    email: {type: String, required: true},
    password: {type: String, required: true}
})

UserSchema.pre('save', (next) => {

})

module.exports = mongoose.model('users', UserSchema)