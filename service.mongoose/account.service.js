const userModel = require('../models/user.model');

module.exports = {
    login: async (meansOfIdentification) => {
        return userModel.findOne({
            $or: [
                { email: meansOfIdentification },
                { phone: meansOfIdentification }
            ]
        });
    }
}