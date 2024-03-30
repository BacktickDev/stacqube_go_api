const permissionModel = require('../models/permissions');

class PermissionService {


    async createPermission(permissionName, permissionLabel, moduleId, subModuleId, companyId) {
        try {
            const permissionData = {
                permissionName: permissionName,
                permissionLabel: permissionLabel,
                moduleId: moduleId,
                subModuleId: subModuleId,
                companyId: companyId
            };
            const permission = await permissionModel.create(permissionData);
            return permission;
        } catch (error) {
            console.error('Error creating permission:', error);
            throw new Error('Error creating permission');
        }
    }

    async getPermissions() {
        return permissionModel.findAll();
    }

    async getPermissionById(id) {
        return permissionModel.findByPk(id);
    }

    async updatePermission(id, data) {
        return permissionModel.update(data, {
            where: {
                id
            }
        });
    }

    async deletePermission(id) {
        return permissionModel.destroy({
            where: {
                id
            }
        });
    }

}

module.exports = new PermissionService();