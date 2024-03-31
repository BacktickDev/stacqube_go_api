const ModulePermissionService = require('../services/modulePermissionService');

class ModulePermissionController {
    async getModulePermissions(req, res) {
        try {
            const modulePermissions = await ModulePermissionService.getModulePermissions();
            res.status(200).json(modulePermissions);
        } catch (e) {
            res.status(500).json(e);
        }
    }
    async createModulePermission(req, res) {
        try {
            const {
                moduleId,
                subModuleId,
                permissionName,
                permissionLabel
            } = req.body;
            const modulePermission = await ModulePermissionService.createModulePermission(moduleId, subModuleId, permissionName, permissionLabel);
            res.status(200).json(modulePermission);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getModulePermissionsByModuleId(req, res) {
        try {
            const {
                moduleId
            } = req.params;
            const modulePermissions = await ModulePermissionService.getModulePermissionsByModuleId(moduleId);
            res.status(200).json(modulePermissions);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}


module.exports = new ModulePermissionController();