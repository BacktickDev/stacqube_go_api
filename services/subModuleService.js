const subModuleModels = require('../models/submodules');


class SubModuleService {
    async createSubModule(
       moduleId, subModuleName
    ) {
        try {
            const subModuleData = {
                moduleId: moduleId,
                subModuleName: subModuleName,
                
            };
            const subModule = await subModuleModels.create(subModuleData);
            return subModule;
        } catch (error) {
            console.error('Error creating subModule:', error);
            throw new Error('Error creating subModule');
        }
       
    }
    async getSubModules() {
        return await subModuleModels.findAll();
    }
    async getSubModuleById(id) {
        return await subModuleModels.findByPk(id);
    }
    async updateSubModule(id, subModule) {
        return await subModuleModels.update(subModule, {
            where: {
                id: id
            }
        });
    }
    async deleteSubModule(id) {
        return await subModuleModels.destroy({
            where: {
                id: id
            }
        });
    }


}

module.exports = new SubModuleService();