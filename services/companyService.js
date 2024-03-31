const companyModel = require('../models/company');
const companySubscriptionModel = require('../models/companysubscriptions');
const packageModule = require('../models/packagemodules');
const modules = require('../models/modules');
const Companies = require('../models/company');
const CompanySubscriptions = require('../models/companysubscriptions');
const PackageModules = require('../models/packagemodules');
const Modules = require('../models/modules');
const SubscriptionPackage = require('../models/subsciptionpackage');
class CompanyService {
    async getCompanies() {
        return await companyModel.findAll();
    }
    async createCompany(company) {
        return await companyModel.create(company);
    }
    async getCompanyById(id) {
        return await companyModel.findById(id);
    }
    async getSubscribedModulesAndPackageDetails(companyId) {
        return await CompanySubscriptions.findAll({
            where: { companyId: companyId },
            include: [
                {
                    model: Companies,
                },
                {
                    model: PackageModules,
                    include: [
                        {
                            model: Modules,
                            attributes: ['id', 'moduleName'] // Include only necessary attributes for Modules
                        },
                        {
                            model: SubscriptionPackage,
                           
                        }
                    ]
                }, 
            ]
        });
    }

    async  getCompanyDetails(companyId) {
        try {
            // Fetch company details based on company ID
            const company = await companyModel.findByPk(companyId);
            if (!company) {
                throw new Error('Company not found');
            }
            
            // Check if the company ID matches the specified ID
            if (company.id === '0244453c-3387-4b90-aa78-e8f0cf919983') {
                // Fetch all company details for the specified company ID
                const allCompanies = await companyModel.findAll();
                return allCompanies;
            } else {
                // Return details of the company for other company IDs
                return company;
            }
        } catch (error) {
            console.error('Error fetching company details:', error);
            throw error;
        }
    }
    
}

module.exports = new CompanyService();