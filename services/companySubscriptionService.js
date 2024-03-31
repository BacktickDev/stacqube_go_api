const companySubscriptionModel = require('../models/companysubscriptions');

class CompanySubscriptionService {
    async createCompanySubscription(companyId, packageModuleId, startDate, endDate) {
        try {
            const companySubscriptionData = {
                companyId: companyId,
                packageModuleId: packageModuleId,
                startDate: startDate,
                endDate: endDate
            };
            const companySubscription = await companySubscriptionModel.create(companySubscriptionData);
            return companySubscription;

        } catch (error) {
            console.error('Error creating company subscription:', error);
            throw new Error('Error creating company subscription');
        }
    }

    async getCompanySubscriptions() {
        return companySubscriptionModel.findAll();
    }

    async getCompanySubscriptionById(id) {
        return companySubscriptionModel.findByPk(id);
    }

    async updateCompanySubscription(id, data) {
        return companySubscriptionModel.update(data, {
            where: {
                id
            }
        });
    }

    async deleteCompanySubscription(id) {
        return companySubscriptionModel.destroy({
            where: {
                id
            }
        });
    }
}


module.exports = new CompanySubscriptionService();