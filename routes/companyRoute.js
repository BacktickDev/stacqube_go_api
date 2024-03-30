const CompanyController = require('../controllers/companyController');
const express = require('express');
const router = express.Router();

router.get('/', CompanyController.getCompanies);
router.post('/', CompanyController.createCompany);
router.get('/:id', CompanyController.getCompanyById);


module.exports = router;
