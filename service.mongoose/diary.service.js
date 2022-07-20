const diaryModel = require('../models/diary.model');

module.exports = {
    getDiaryUser: async (userId) => {
        return diaryModel.find({ userID: userId })
    },
    addNewDaySummary: async (userId, summary) => {
        const { date, breakfast, lunch, dinner, snackingBetweenMeals } = summary;
        const newDaySummary = new diaryModel({
            userID: userId, date, breakfast, lunch, dinner, snackingBetweenMeals
        });
        await newDaySummary.save();
    },
    updateDaySummary: async (id, summary) => {
        const { date, breakfast, lunch, dinner, snackingBetweenMeals } = summary;
        await diaryModel.updateOne({ _id: id },
            {
                $set:
                {
                    date: date,
                    breakfast: breakfast,
                    lunch: lunch,
                    dinner: dinner,
                    snackingBetweenMeals: snackingBetweenMeals,
                }
            });
    },
    deleteDaySummary: async (id) => {
        return diaryModel.deleteOne({ userID: id });
    }
}