const mongoose = require("mongoose");

const { isEmail } = require('validator')

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        minlength: 2
    },
    lastName: {
        type: String,
        minlength: 2
    },
    phone: {
        type: String,
        minlength: 7,
        maxlength: 10
    },
    adress: {
        city: { type: String },
        street: { type: String },
        number: { type: Number, min: 1 }
    },
    email: {
        type: String,
        unique: true,
        validate: [isEmail, 'please insert valid'],
        // match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, 'Please fill a valid email address']
    },
    height: {
        type: Number,
        minlength: 2,
        maxlength: 3
    },
    startWeight: {
        type: Number,
        minlength: 2,
        maxlength: 3
    },
}, { timestamps: true })

module.exports = mongoose.model('users', userSchema);

