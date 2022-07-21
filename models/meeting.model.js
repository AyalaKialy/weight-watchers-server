const mongoose = require('mongoose');

const userInMeeting = mongoose.Schema({
    userID: { type: mongoose.Schema.Types.ObjectId, require: true, ref: 'user' },
    weight: { type: Number, required: true },
    comments: { type: String, }
})

const meetingSchema = mongoose.Schema({
    date: { type: String, },
    usersInMeeting: [userInMeeting],
})

module.exports = mongoose.model('meeting', meetingSchema)