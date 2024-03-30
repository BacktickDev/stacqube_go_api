const SubModuleService = require('../services/subModuleService');

class SubModuleController {
    async createSubModule(req, res) {
        const {moduleId, subModuleName} = req.body;
        const newSubModule = await SubModuleService.createSubModule(
            moduleId, subModuleName
        );
        res.json(newSubModule);
    }

    async getSubModules(req, res) {
        const subModules = await SubModuleService.getSubModules();
        res.json(subModules);
    }

    async getSubModuleById(req, res) {
        const id = req.params.id;
        const subModule = await SubModuleService.getSubModuleById(id);
        res.json(subModule);
    }

    async updateSubModule(req, res) {
        const id = req.params.id;
        const subModule = req.body;
        const updatedSubModule = await SubModuleService.updateSubModule(id, subModule);
        res.json(updatedSubModule);
    }

    async deleteSubModule(req, res) {
        const id = req.params.id;
        const deletedSubModule = await SubModuleService.deleteSubModule(id);
        res.json(deletedSubModule);
    }
}

module.exports = new SubModuleController();