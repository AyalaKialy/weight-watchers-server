const mongoose = require('mongoose');

const diarySchema = mongoose.Schema({
    userID: { type: mongoose.Schema.Types.ObjectId, require: true, ref: 'user' },
    date: { type: Date, require: true },
    breakfast: { type: [String], require: false },
    lunch: { type: [String], require: false },
    dinner: { type: [String], require: false },
    snackingBetweenMeals: { type: [String], require: false }
})

module.exports = mongoose.model('diary', diarySchema)