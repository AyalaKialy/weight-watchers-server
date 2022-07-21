const service = require('../service.mongoose/meeting.service');

module.exports = {
    getAllMeetings: async (req, res, next) => {
        try {
            const meetings = await service.getAllMeetings();
            res.send(meetings);
        }
        catch (error) {
            next(error)
        };
    },
    getMeetingById: async (req, res, next) => {
        try {
            const id = req.params.id;
            const meetings = await service.getMeetingById(id);
            res.send(meetings);
        }
        catch (error) {
            next(error)
        }
    },
    updateMeeting: async (req, res, next) => {
        try {
            const id = req.params.id;
            const meetingToUpdate = req.body;
            await service.updateMeeting(id, meetingToUpdate);
            res.status(200).json('put meetings successfully');
        }
        catch (error) {
            next(error)
        };
    },
    createMeeting: async (req, res, next) => {
        try {
            const meetings = req.body;
            await service.createMeeting(meetings);
            res.status(200).json('post meetings successfully');
        }
        catch (error) {
            next(error)
        };
    },
    deleteMeeting: async (req, res, next) => {
        try {
            const id = req.params.id;
            await service.deleteMeeting(id);
            res.status(200).json({ message: `meeting deleted` });
        }
        catch (error) {
            next(error)
        };
    }
}


