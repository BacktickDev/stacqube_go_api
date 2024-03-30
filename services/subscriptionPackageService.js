const  SubscriptionPackageModel = require('../models/subsciptionpackage');

class SubscriptionPackageService {
    async createSubscriptionPackage(
        packageName, packageDescription, packagePrice, packageDuration
    ) {
        try{
            const subscriptionPackageData = {
                packageName: packageName,
                packageDescription: packageDescription,
                packagePrice: packagePrice,
                packageDuration: packageDuration
            };
            const subscriptionPackage = await SubscriptionPackageModel.create(subscriptionPackageData);
            return subscriptionPackage;

        }catch(error){
            console.error('Error creating subscription package:', error);
            throw new Error('Error creating subscription package');
        }
    }

    async getSubscriptionPackages() {
        return SubscriptionPackageModel.findAll();
    }

    async getSubscriptionPackageById(id) {
        return SubscriptionPackageModel.findByPk(id);
    }

    async updateSubscriptionPackage(id, data) {
        return SubscriptionPackageModel.update(data, {
            where: {
                id
            }
        });
    }

    async deleteSubscriptionPackage(id) {
        return SubscriptionPackageModel.destroy({
            where: {
                id
            }
        });
    }
}

module.exports = new SubscriptionPackageService();