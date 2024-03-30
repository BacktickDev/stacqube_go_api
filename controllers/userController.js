const UserService = require('../services/userService');

class UserController {
    async getUsers(req, res) {
        try {
            const users = await UserService.getUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
    async createUser(req, res) {
        try {
            const {userName,firstName,lastName,email,mobile,password,roleId,companyId} = req.body;
            const user = await UserService.createUser({userName,firstName,lastName,email,mobile,password,roleId,companyId});
            res.status(201).json(user);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    async getUserById(req, res) {
        try {
            const user = await UserService.getUserById(req.params.id);
            res.status(200).json(user);
        } catch (error) {
            res.status(404).send(error.message);
        }
    }
}

module.exports = new UserController();