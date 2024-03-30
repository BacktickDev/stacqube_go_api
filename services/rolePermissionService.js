const rolePermissionModel = require('../models/rolepermissions');

class RolePermissionService {
    async createRolePermission(roleId, permissionId) {
        try {
            const rolePermissionData = {
                roleId: roleId,
                permissionId: permissionId
            };
            const rolePermission = await rolePermissionModel.create(rolePermissionData);
            return rolePermission;

        } catch (error) {
            console.error('Error creating role permission:', error);
            throw new Error('Error creating role permission');
        }
    }

    async getRolePermissions() {
        return rolePermissionModel.findAll();
    }

    async getRolePermissionById(id) {
        return rolePermissionModel.findByPk(id);
    }

    async updateRolePermission(id, data) {
        return rolePermissionModel.update(data, {
            where: {
                id
            }
        });
    }

    async deleteRolePermission(id) {
        return rolePermissionModel.destroy({
            where: {
                id
            }
        });
    }

}

module.exports = new RolePermissionService();