const CompanyController = require('../controllers/companyController');
const express = require('express');
const router = express.Router();

router.get('/', CompanyController.getCompanies);
router.post('/', CompanyController.createCompany);
router.get('/:id', CompanyController.getCompanyById);
router.get('/sub/:companyId/sub-details', CompanyController.getSubscribedModulesAndPackageDetails);
router.get('/:companyId/details', CompanyController.getCompanyDetails);



module.exports = router;
