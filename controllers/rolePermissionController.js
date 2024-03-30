const RolePermissionService = require('../services/rolePermissionService');

class RolePermissionController {
    async createRolePermission(req, res) {
        try {
            const {roleId, permissionId} = req.body;
            const rolePermission = await RolePermissionService.createRolePermission(roleId, permissionId);
            res.status(201).json(rolePermission);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    async getRolePermissions(req, res) {
        try {
            const rolePermissions = await RolePermissionService.getRolePermissions();
            res.status(200).json(rolePermissions);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    async getRolePermissionById(req, res) {
        try {
            const rolePermission = await RolePermissionService.getRolePermissionById(req.params.id);
            res.status(200).json(rolePermission);
        } catch (error) {
            res.status(404).send(error.message);
        }
    }

    async updateRolePermission(req, res) {
        try {
            const id = req.params.id;
            const data = req.body;
            const rolePermission = await RolePermissionService.updateRolePermission(id, data);
            res.status(200).json(rolePermission);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    async deleteRolePermission(req, res) {
        try {
            const id = req.params.id;
            await RolePermissionService.deleteRolePermission(id);
            res.status(204).send();
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
}


module.exports = new RolePermissionController();