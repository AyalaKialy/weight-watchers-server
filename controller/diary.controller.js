const service = require('../service.mongoose/diary.service');

module.exports = {
    getDiaryUser: async (req, res, next) => {
        try {
            const userId = req.params.id;
            const diary = await service.getDiaryUser(userId);
            res.send({ diary });
        }
        catch (error) {
            next(error);
        };
    },
    addNewDaySummary: async (req, res, next) => {
        try {
            const userId = req.params.id;
            const summary = req.body;
            await service.addNewDaySummary(userId, summary).then(() => {
                res.status(200).json('post day summary successfully')
            })
        }
        catch (error) {
            next(error);
        };
    },
    updateDaySummary: async (req, res, next) => {
        try {
            const id = req.params.id;
            const summary = req.body;
            await service.updateDaySummary(id, summary).then(() => {
                res.status(200).json('update day summary successfully')
            })
        }
        catch (error) {
            next(error);
        };
    },
    deleteDaySummary: async (req, res, next) => {
        try {
            const id = req.params.id;

            await service.deleteDaySummary(id).then(() => {
                res.status(200).json({
                    message: `day summary successfully deleted`
                })
            })
        }
        catch (error) {
            next(error);
        };
    }
}


