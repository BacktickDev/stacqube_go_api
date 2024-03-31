
const SubscriptionPackageService = require('../services/subscriptionPackageService');

class SubscriptionPackageController {
    async createSubscriptionPackage(req, res) {
        try {
            const {
                packageName,
                packageDescription,
                packagePrice,
                packageDurationType
            } = req.body;
            const subscriptionPackage = await SubscriptionPackageService.createSubscriptionPackage(
                packageName,
                packageDescription,
                packagePrice,
                packageDurationType
            );
            res.status(201).json(subscriptionPackage);
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    }

    async getSubscriptionPackages(req, res) {
        try {
            const subscriptionPackages = await SubscriptionPackageService.getSubscriptionPackages();
            res.status(200).json(subscriptionPackages);
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    }

    async getSubscriptionPackageById(req, res) {
        try {
            const id = req.params.id;
            const subscriptionPackage = await SubscriptionPackageService.getSubscriptionPackageById(id);
            res.status(200).json(subscriptionPackage);
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    }

    async updateSubscriptionPackage(req, res) {
        try {
            const id = req.params.id;
            const data = req.body;
            const subscriptionPackage = await SubscriptionPackageService.updateSubscriptionPackage(id, data);
            res.status(200).json(subscriptionPackage);
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    }

    async deleteSubscriptionPackage(req, res) {
        try {
            const id = req.params.id;
            const subscriptionPackage = await SubscriptionPackageService.deleteSubscriptionPackage(id);
            res.status(200).json(subscriptionPackage);
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    }
}

module.exports = new SubscriptionPackageController();