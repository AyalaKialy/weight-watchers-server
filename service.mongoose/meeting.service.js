const meetingModel = require('../models/meeting.model');

module.exports = {
    getAllMeetings: async () => {
        return meetingModel.find();
    },
    getMeetingById: async (id) => {
        return meetingModel.findOne({ _id: id });
    },
    updateMeeting: async (id, meetingToUpdate) => {
        const { date, usersInMeeting } = meetingToUpdate;
        await meetingModel.updateOne({ _id: id },
            {
                $set:
                {
                    date: date,
                    usersInMeeting: usersInMeeting,
                }
            });
    },
    createMeeting: async (meeting) => {
        const newMeeting = await new meetingModel(meeting);
        await newMeeting.save();
    },
    deleteMeeting: async (id) => {
        return meetingModel.deleteOne({ _id: id });
    },
};
