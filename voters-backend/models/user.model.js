const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    user: {
        name: {
            firstName: String,
            lastName: String
        },
        email: {
            type: String,
            require: true,
            unique: true,
            trim: true
        },
        password: {
            type: String,
            require: true
        }
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User