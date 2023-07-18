const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

UserSchema.pre('save', function(next){
    const user = this
    console.log(`user: ${user}`)
    bcrypt.hash(user.password, 10, (err, encrypted)=>{
        user.password = encrypted
        next()
    })
})

module.exports = mongoose.model('User', UserSchema)