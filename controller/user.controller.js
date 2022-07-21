const service = require('../service.mongoose/user.service');

module.exports = {
    getAllUsers: async (req, res, next) => {
        try {
                const users = await service.getAllUsers();
                res.send(users);
        }
        catch (error) {
            next(error)
        };
    },
    getUserById: async (req, res, next) => {
        try {
            const id = req.params.id;
            const user = await service.getUserById(id);
            res.send({ user })
        }
        catch (error) {
            next(error)
        };
    },
    updateUser: async (req, res, next) => {
        try {
            const id = req.params.id;
            const user = req.body;
            await service.updateUser(id, user);
            res.status(200).json('put user successfully');

        }
        catch (error) {
            next(error)
        };
    },
    createUser: async (req, res, next) => {
        try {
            const user = req.body;
            await service.createUser(user);
            res.status(200).json('post user successfully');
        }
        catch (error) {
            next(error)
        };
    },
    deleteUser: async (req, res, next) => {
        try {
            const id = req.params.id;
            await service.deleteUser(id);
            res.status(200).json({
                message: `user deleted`
            })
        }
        catch (error) {
            next(error)
        };
    }
}


