const roleModel = require('../models/role');

class RoleService {
    async getRoles() {
        return await roleModel.findAll();
    }
    async  createRole(roleName, companyId) {
        try {
            const roleData = {
                roleName: roleName,
                companyId: companyId
            };
            const role = await roleModel.create(roleData);
            return role;
        } catch (error) {
            console.error('Error creating role:', error);
            throw new Error('Error creating role');
        }
    }
    async getRoleById(id) {
        return await roleModel.findByPk(id);
    }
}


module.exports = new RoleService();