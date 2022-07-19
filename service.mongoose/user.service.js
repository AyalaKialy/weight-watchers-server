const { ObjectId } = require('mongodb');
const userModel = require('../models/user.model');

module.exports = {
getAllUsers : async () => {
        const users = await userModel.find();
        return users;
},

getUserById : async (id) => {
    const user = await userModel.findOne({ _id: ObjectId(id) });
    return user;
},

createUser : async (user) => {
        const addUser = await new userModel(user);
        const newUser = await addUser.save();
},

deleteUser : async(id) => {
    const userToDelete = await userModel.deleteOne({ _id: ObjectId(id) });
},

updateUser: async (id, user) => {
        const { firstName, lastName,address, email,phone, height/*, weight, diary */ } = user;
        await userModel.updateOne({ _id: ObjectId(id) },
            {
                $set:
                {
                    firstName:firstName,
                    lastName:lastName,
                    address: address,
                    email: email,
                    phone:phone,
                    height:height,
                    // weight:weight,
                    // diary:diary,
                }
            });
},
}



