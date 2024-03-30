const CompanySubscriptionService = require('../services/companySubscriptionService');

class CompanySubscriptionController {
    async createCompanySubscription(req, res) {
        try {
            const {companyId, packageId, startDate, endDate} = req.body;
            const companySubscription = await CompanySubscriptionService.createCompanySubscription({companyId, packageId, startDate, endDate});
            res.status(201).json(companySubscription);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    async getCompanySubscriptions(req, res) {
        try {
            const companySubscriptions = await CompanySubscriptionService.getCompanySubscriptions();
            res.status(200).json(companySubscriptions);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    async getCompanySubscriptionById(req, res) {
        try {
            const companySubscription = await CompanySubscriptionService.getCompanySubscriptionById(req.params.id);
            res.status(200).json(companySubscription);
        } catch (error) {
            res.status(404).send(error.message);
        }
    }

    async updateCompanySubscription(req, res) {
        try {
            const id = req.params.id;
            const data = req.body;
            const companySubscription = await CompanySubscriptionService.updateCompanySubscription(id, data);
            res.status(200).json(companySubscription);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    async deleteCompanySubscription(req, res) {
        try {
            const id = req.params.id;
            await CompanySubscriptionService.deleteCompanySubscription(id);
            res.status(204).send();
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
}


module.exports = new CompanySubscriptionController();