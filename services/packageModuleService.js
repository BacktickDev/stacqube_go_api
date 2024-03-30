const packageModuleModel = require('../models/packagemodules');

class PackageModuleService {
    async createPackageModule(packageId, moduleId) {
        try {
            const packageModuleData = {
                packageId: packageId,
                moduleId: moduleId
            };
            const packageModule = await packageModuleModel.create(packageModuleData);
            return packageModule;

        } catch (error) {
            console.error('Error creating package module:', error);
            throw new Error('Error creating package module');
        }
    }

    async getPackageModules() {
        return packageModuleModel.findAll();
    }

    async getPackageModuleById(id) {
        return packageModuleModel.findByPk(id);
    }

    async updatePackageModule(id, data) {
        return packageModuleModel.update(data, {
            where: {
                id
            }
        });
    }

    async deletePackageModule(id) {
        return packageModuleModel.destroy({
            where: {
                id
            }
        });
    }
}

module.exports = new PackageModuleService();