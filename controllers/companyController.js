const CompanyService = require('../services/companyService');

class CompanyController 
{
    async getCompanies(req, res) {
        try {
            const companies = await CompanyService.getCompanies();
            res.status(200).json(companies);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
    async createCompany(req, res) {
        try {
            const company = await CompanyService.createCompany(req.body);
            res.status(201).json(company);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    async getCompanyById(req, res) {
        try {
            const company = await CompanyService.getCompanyById(req.params.id);
            res.status(200).json(company);
        } catch (error) {
            res.status(404).send(error.message);
        }
    }
}


module.exports = new CompanyController();