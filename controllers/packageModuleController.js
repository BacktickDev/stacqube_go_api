const PackageModuleService = require('../services/packageModuleService');

class PackageModuleController {
    async createPackageModule(req, res) {
        try {
            const {
                packageId,
                moduleId
            } = req.body;
            const packageModule = await PackageModuleService.createPackageModule(
                packageId,
                moduleId
            );
            res.status(201).json(packageModule);
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    }

    async getPackageModules(req, res) {
        try {
            const packageModules = await PackageModuleService.getPackageModules();
            res.status(200).json(packageModules);
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    }

    async getPackageModuleById(req, res) {
        try {
            const id = req.params.id;
            const packageModule = await PackageModuleService.getPackageModuleById(id);
            res.status(200).json(packageModule);
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    }

    async updatePackageModule(req, res) {
        try {
            const id = req.params.id;
            const data = req.body;
            const packageModule = await PackageModuleService.updatePackageModule(id, data);
            res.status(200).json(packageModule);
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    }

    async deletePackageModule(req, res) {
        try {
            const id = req.params.id;
            const packageModule = await PackageModuleService.deletePackageModule(id);
            res.status(200).json(packageModule);
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    }
}


module.exports = new PackageModuleController();