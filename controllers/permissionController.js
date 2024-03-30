
const PermissionService = require('../services/permissionService');

class PermissionController {
    async createPermission(req, res) {
        try {
            const {permissionName, permissionLabel, moduleId, subModuleId, companyId} = req.body;
            const permission = await PermissionService.createPermission({permissionName, permissionLabel, moduleId, subModuleId, companyId});
            res.status(201).json(permission);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    async getPermissions(req, res) {
        try {
            const permissions = await PermissionService.getPermissions();
            res.status(200).json(permissions);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    async getPermissionById(req, res) {
        try {
            const permission = await PermissionService.getPermissionById(req.params.id);
            res.status(200).json(permission);
        } catch (error) {
            res.status(404).send(error.message);
        }
    }

    async updatePermission(req, res) {
        try {
            const id = req.params.id;
            const data = req.body;
            const permission = await PermissionService.updatePermission(id, data);
            res.status(200).json(permission);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    async deletePermission(req, res) {
        try {
            const id = req.params.id;
            await PermissionService.deletePermission(id);
            res.status(204).send();
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
}


module.exports = new PermissionController();