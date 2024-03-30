const companyBranchModel = require('../models/companybranches');

class CompanyBranchService {
    async createCompanyBranch(
        companyId, branchName, branchAddress, branchEmail, branchPhone, branchStatus, branchWebsite
    ) {
        try {
            const companyBranchData = {
                companyId: companyId,
                branchName: branchName,
                branchAddress: branchAddress,
                branchEmail: branchEmail,
                branchPhone: branchPhone,
                branchStatus: branchStatus,
                branchWebsite: branchWebsite
            };
            const companyBranch = await companyBranchModel.create(companyBranchData);
            return companyBranch;
        } catch (error) {
            console.error('Error creating company branch:', error);
            throw new Error('Error creating company branch');
        }
       
    }
    async getCompanyBranches() {
        return await companyBranchModel.findAll();
    }
    async getCompanyBranchById(id) {
        return await companyBranchModel.findByPk(id);
    }
    async updateCompanyBranch(id, companyBranch) {
        return await companyBranchModel.update(companyBranch, {
            where: {
                id: id
            }
        });
    }
    async deleteCompanyBranch(id) {
        return await companyBranchModel.destroy({
            where: {
                id: id
            }
        });
    }
    

   
}


module.exports = new CompanyBranchService();