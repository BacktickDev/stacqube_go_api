const modulePermisssionModel = require('../models/modulepermissions');
const modulesModel = require('../models/modules');
const SubModules = require('../models/submodules');

class ModulePermissionService {

    async getModulePermissions() {
        return await modulePermisssionModel.findAll();
    }
    async createModulePermission(
        moduleId, subModuleId, permissionName, permissionLabel
    ) {
        try {
            return await modulePermisssionModel.create({
                moduleId,
                subModuleId,
                permissionName,
                permissionLabel
            });
        } catch (e) {
            console.log(e)
        }
    }

    async  getModulePermissionsByModuleId(moduleId) {
        try {
            const modulePermissions = await modulePermisssionModel.findAll({
                where: { moduleId },
                include: [
                    {
                        model: modulesModel,
                        as: 'module',
                        attributes: ['moduleName'],
                    },
                    {
                        model: SubModules,
                        as: 'subModule',
                        attributes: ['subModuleName'],
                    }
                ],
                attributes: ['id', 'permissionName', 'permissionLabel'], // Select necessary permission attributes
                order: [
                    [{ model: modulesModel, as: 'module' }, 'moduleName'], // Order by module name
                    [{ model: SubModules, as: 'subModule' }, 'subModuleName'] // Then order by submodule name
                ],
                group: ['module.moduleName', 'subModule.subModuleName', 'id'] // Group by module, submodule, and permission ID
            });
    
            // Manipulate the data structure to group permissions by module and submodule
            const formattedPermissions = modulePermissions.reduce((acc, permission) => {
                const moduleName = permission.module.moduleName;
                const subModuleName = permission.subModule.subModuleName;
    
                if (!acc[moduleName]) {
                    acc[moduleName] = {};
                }
    
                if (!acc[moduleName][subModuleName]) {
                    acc[moduleName][subModuleName] = [];
                }
    
                acc[moduleName][subModuleName].push({
                    id: permission.id,
                    permissionName: permission.permissionName,
                    permissionLabel: permission.permissionLabel
                });
    
                return acc;
            }, {});
    
            return formattedPermissions;
        } catch (error) {
            console.error('Error fetching module permissions:', error);
            throw error;
        }
    }
    
    
    

}


module.exports = new ModulePermissionService();