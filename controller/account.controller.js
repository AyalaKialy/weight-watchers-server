const service = require('../service.mongoose/account.service');

module.exports = {
    login: async function (req, res, next) {
        try {
            const meansOfIdentification = req.body.meansOfIdentification;
            const user = await service.login(meansOfIdentification);
            res.send({ user });
        }
        catch (error) {
            next(error);
        }
    }
}