const RoleService = require('../services/roleService');

class RoleController{
    async getRoles(req, res){
        try {
            const roles = await RoleService.getRoles();
            res.status(200).json(roles);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
    async createRole(req, res){
        try {
            const {roleName, companyId} = req.body;
            const role = await RoleService.createRole(roleName, companyId);
            res.status(201).json(role);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
    async getRoleById(req, res){
        try {
            const role = await RoleService.getRoleById(req.params.id);
            res.status(200).json(role);
        } catch (error) {
            res.status(404).send(error.message);
        }
    }
}

module.exports = new RoleController();