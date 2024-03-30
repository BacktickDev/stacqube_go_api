const companyModel = require('../models/company');

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
}

module.exports = new CompanyService();