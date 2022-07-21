const { ObjectId } = require('mongodb');
const userModel = require('../models/user.model');

module.exports = {
    getAllUsers: async () => {
        return userModel.find();

    },
    getUserById: async (id) => {
        return userModel.findOne({ _id: id });
    },
    createUser: async (user) => {
        const newUser = await new userModel(user);
        await newUser.save();
    },
    deleteUser: async (id) => {
        return userModel.deleteOne({ _id: ObjectId(id) });
    },
    updateUser: async (id, user) => {
        const { firstName, lastName, address, startWeight, height, phone, email } = user;
        await userModel.updateOne({ _id: id },
            {
                $set:
                {
                    firstName: firstName,
                    lastName: lastName,
                    address: address,
                    email: email,
                    phone: phone,
                    height: height,
                    startWeight: startWeight,
                }
            });
    },
}

