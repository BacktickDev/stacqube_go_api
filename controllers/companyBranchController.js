const CompanyBranchService = require('../services/companyBranchService');

class CompanyBranchController {
    async createCompanyBranch(req, res) {
        const {companyId, branchName, branchAddress, branchEmail, branchPhone, branchStatus, branchWebsite} = req.body;
        const newCompanyBranch = await CompanyBranchService.createCompanyBranch(
            companyId, branchName, branchAddress, branchEmail, branchPhone, branchStatus, branchWebsite
        );
        res.json(newCompanyBranch);
    }

    async getCompanyBranches(req, res) {
        const companyBranches = await CompanyBranchService.getCompanyBranches();
        res.json(companyBranches);
    }

    async getCompanyBranchById(req, res) {
        const id = req.params.id;
        const companyBranch = await CompanyBranchService.getCompanyBranchById(id);
        res.json(companyBranch);
    }

    async updateCompanyBranch(req, res) {
        const id = req.params.id;
        const companyBranch = req.body;
        const updatedCompanyBranch = await CompanyBranchService.updateCompanyBranch(id, companyBranch);
        res.json(updatedCompanyBranch);
    }

    async deleteCompanyBranch(req, res) {
        const id = req.params.id;
        const deletedCompanyBranch = await CompanyBranchService.deleteCompanyBranch(id);
        res.json(deletedCompanyBranch);
    }
}

module.exports = new CompanyBranchController();