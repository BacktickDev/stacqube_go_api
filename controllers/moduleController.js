const ModulesService = require('../services/modulesServices');

class ModuleController {
    async createModule(req, res) {
        const {moduleName, moduleDescription} = req.body;
        const newModule = await ModulesService.createModule(
            moduleName, moduleDescription
        );
        res.json(newModule);
    }

    async getModules(req, res) {
        const modules = await ModulesService.getModules();
        res.json(modules);
    }

    async getModuleById(req, res) {
        const id = req.params.id;
        const module = await ModulesService.getModuleById(id);
        res.json(module);
    }

    async updateModule(req, res) {
        const id = req.params.id;
        const module = req.body;
        const updatedModule = await ModulesService.updateModule(id, module);
        res.json(updatedModule);
    }

    async deleteModule(req, res) {
        const id = req.params.id;
        const deletedModule = await ModulesService.deleteModule(id);
        res.json(deletedModule);
    }
}

module.exports = new ModuleController();