const mongoose = require('mongoose')

// Creates schema
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
}, {timestamps: true})

module.exports = mongoose.model('User', userSchema)